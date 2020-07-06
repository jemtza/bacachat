import { Schema, model } from 'mongoose';

const chatSchema = new Schema({
  participants: [
    {
      // type: [String],
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  messages: [
    {
      // type: [String],
      type: Schema.Types.ObjectId,
      ref: 'Message',
    },
  ],
});

const Chat = model('Chat', chatSchema);

export default Chat;

////////
// {
//     id: '1',
//     participants: ['1', '2'],
//     messages: ['1'],
//   },
