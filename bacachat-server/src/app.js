import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { origin } from './env';

// console.log(db.connectDatabase);

export const app = express();
// app.setMaxListeners(0);
app.use(cors({ credentials: true, origin }));
app.use(express.json());
app.use(cookieParser());

app.get('/_ping', (req, res) => {
  res.send('pong');
});
