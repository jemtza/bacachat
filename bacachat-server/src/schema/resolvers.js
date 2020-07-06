import { withFilter } from 'apollo-server-express';
import { DateTimeResolver, URLResolver } from 'graphql-scalars';
import { chats, messages, users } from '../db';
import { secret, expiration, dbUri } from '../env';
import { compare, hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { validateLength, validatePassword } from '../validators';
import { User, Message, Chat } from '../db/Models';

const resolvers = {
  Date: DateTimeResolver,

  URL: URLResolver,

  Message: {
    async chat(message) {
      return await Chat.findOne({ messages: message.id });
    },
    async sender(message) {
      return await User.findOne({ _id: message.sender });
    },
    async recipient(message) {
      return await User.findOne({ _id: message.recipient });
    },
    isMine(message, args, { currentUser }) {
      return message.sender === currentUser.id;
    },
  },

  Chat: {
    async name(chat, args, { currentUser }) {
      if (!currentUser) return null;
      if (chat.name) return chat.name;

      const participants = await User.find({ _id: chat.participants });

      const withoutUser = participants.filter((p) => p.id != currentUser.id);
      const name = withoutUser.map((p) => p.name);

      return participants ? name.join(', ') : null;
    },
    async picture(chat, args, { currentUser }) {
      if (!currentUser) return null;

      const participantId = chat.participants.find((p) => p != currentUser.id);
      if (!participantId) return null;

      const participant = await User.findOne({ _id: participantId });
      return participant ? participant.picture : null;
    },
    async messages(chat) {
      return await Message.find({ chat: chat.id });
    },
    async participants(chat) {
      return await User.find({ _id: chat.participants });
    },
    async lastMessage(chat) {
      const lastMessage = chat.messages[chat.messages.length - 1];
      return await Message.findOne({ _id: lastMessage });
    },
  },

  Query: {
    me(root, args, { currentUser }) {
      return currentUser || null;
    },
    async chats(root, args, { currentUser }) {
      if (!currentUser) return [];
      return await Chat.find({ participants: currentUser.id });
    },
    async chat(root, { chatId }, { currentUser }) {
      if (!currentUser) return null;

      const chat = await Chat.findOne({ _id: chatId });
      if (!chat) return null;

      return chat.participants.includes(currentUser.id) ? chat : null;
    },
    async users(root, args, { currentUser }) {
      if (!currentUser) return [];
      return await User.find({ _id: { $nin: [currentUser.id] } });
    },
  },

  Mutation: {
    async signIn(root, { username, password }, { res }) {
      const user = await User.findOne({ username });

      if (!user) {
        throw new Error('User not found');
      }

      const passwordsMatch = await compare(password, user.password);

      if (!passwordsMatch) {
        throw new Error('Password is incorrect');
      }

      const authToken = jwt.sign(username, secret);

      res.cookie('authToken', authToken, { maxAge: expiration });

      return user;
    },
    async signUp(root, { name, username, password, passwordConfirm }) {
      validateLength('req.name', name, 3, 50);
      validateLength('req.username', username, 3, 18);
      validatePassword('req.password', password);

      if (password !== passwordConfirm) {
        throw Error("Password and confirmation don't match");
      }

      if (await User.findOne({ username })) {
        throw Error('Username already exists');
      }
      const user = new User({
        password,
        picture: `https://randomuser.me/api/portraits/thumb/lego/${Math.round(
          Math.random() * 9
        )}.jpg`,
        username,
        name,
      });

      await user.save(user);

      return user;
    },
    async addMessage(root, { chatId, content }, { currentUser, pubsub }) {
      if (!currentUser) return null;

      const chat = await Chat.findOne({ _id: chatId });
      if (!chat.participants.includes(currentUser.id)) return null;
      const message = new Message({
        createdAt: new Date(),
        sender: currentUser.id,
        recipient: chat.participants.find((p) => p != currentUser.id),
        content,
        chat,
      });
      await message.save();

      chat.messages.push(message);
      await chat.save();

      pubsub.publish('messageAdded', {
        messageAdded: message,
      });

      console.log('mensaje enviado');

      return message;
    },
    async addChat(root, { recipientId }, { currentUser, pubsub }) {
      if (!currentUser) return null;
      if (await !User.count({ _id: recipientId })) return null;

      // existing chat
      let chat = await Chat.findOne({
        participants: [currentUser.id, ...recipientId],
      });
      if (chat) return chat;

      // new chat
      chat = new Chat({
        participants: [currentUser.id, ...recipientId],
        messages: [],
      });
      await chat.save();

      pubsub.publish('chatAdded', {
        chatAdded: chat,
      });

      return chat;
    },
    async removeChat(root, { chatId }, { currentUser, pubsub }) {
      if (!currentUser) return null;

      const chat = await Chat.findOne({ _id: chatId });

      pubsub.publish('chatRemoved', {
        chatRemoved: chat,
      });

      if (!chat.participants.some((p) => p == currentUser.id)) return null;
      await Message.deleteMany({ chat: chatId });

      await Chat.findOneAndDelete({ _id: chatId });

      return chatId;
    },
  },

  Subscription: {
    messageAdded: {
      subscribe: withFilter(
        (root, args, { pubsub }) => pubsub.asyncIterator('messageAdded'),
        async ({ messageAdded }, args, { currentUser }) => {
          if (!currentUser) return false;
          const chat = await Chat.findOne({ _id: messageAdded.chat });
          return chat.participants.includes(currentUser.id);
        }
      ),
    },
    chatAdded: {
      subscribe: withFilter(
        (root, args, { pubsub }) => pubsub.asyncIterator('chatAdded'),
        ({ chatAdded }, args, { currentUser }) => {
          if (!currentUser) return false;
          return chatAdded.participants.some((p) => p == currentUser.id);
        }
      ),
    },
    chatRemoved: {
      subscribe: withFilter(
        (root, args, { pubsub }) => pubsub.asyncIterator('chatRemoved'),
        ({ chatRemoved }, args, { currentUser }) => {
          if (!currentUser) return false;
          return chatRemoved.participants.some((p) => p == currentUser.id);
        }
      ),
    },
  },
};

export default resolvers;
