import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  sender: {
    type: String,
    required: true,
  },
  // recipient: {
  //   type: String,
  //   required: true,
  // },
  chat: {
    type: Schema.Types.ObjectId,
    ref: 'Chat',
  },
});

const Message = model('Message', messageSchema);

export default Message;

////////////

// {
//         id: '1',
//         content: 'You on your way?',
//         createdAt: new Date(new Date('1-1-2019').getTime() - 60 * 1000 * 1000),
//         sender: '1',
//         recipient: '2',
//       }
