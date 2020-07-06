import { ApolloServer, gql, PubSub } from 'apollo-server-express';
import cookie from 'cookie';
import http from 'http';
import jwt from 'jsonwebtoken';
import { app } from './app';
import connectDatabase from './db';
import { User } from './db/Models';
import { origin, port, secret } from './env';
import schema from './schema';

connectDatabase();

const pubsub = new PubSub();

const server = new ApolloServer({
  schema,
  context: async (session) => {
    // Access the request object
    let req = session.connection
      ? session.connection.context.request
      : session.req;

    // It's subscription
    if (session.connection) {
      req.cookies = cookie.parse(req.headers.cookie || '');
    }

    let currentUser;
    if (req.cookies.authToken) {
      const username = jwt.verify(req.cookies.authToken, secret);
      // currentUser = username && users.find((u) => u.username === username);
      currentUser = await User.findOne({ username });
    }

    return {
      currentUser,
      pubsub,
      res: session.res,
    };
  },
  subscriptions: {
    onConnect(params, ws, ctx) {
      // pass the request object to context
      return {
        request: ctx.request,
      };
    },
    // path: '/ws',
  },
});

server.applyMiddleware({
  app,
  path: '/graphql',
  cors: { credentials: true, origin },
});

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
