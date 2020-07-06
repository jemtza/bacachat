import { Schema, model } from 'mongoose';
import { hash } from 'bcrypt';

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  chats: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Chat',
    },
  ],
});

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await hash(user.password, 8);
  }
  next();
});

const User = model('User', userSchema);

export default User;

/////////////

//      {
//         id: '1',
//         name: 'Ray Edwards',
//         username: 'ray',
//         password:
//           '$2a$08$NO9tkFLCoSqX1c5wk3s7z.JfxaVMKA.m7zUDdDwEquo4rvzimQeJm', // 111
//         picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
//       }
