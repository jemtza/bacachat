/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./env */ "./src/env.js");



 // console.log(db.connectDatabase);

const app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // app.setMaxListeners(0);

app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()({
  credentials: true,
  origin: _env__WEBPACK_IMPORTED_MODULE_3__["origin"]
}));
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());
app.get('/_ping', (req, res) => {
  res.send('pong');
});

/***/ }),

/***/ "./src/db/Models/Chat.js":
/*!*******************************!*\
  !*** ./src/db/Models/Chat.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const chatSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  participants: [{
    // type: [String],
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.ObjectId,
    ref: 'User'
  }],
  messages: [{
    // type: [String],
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.ObjectId,
    ref: 'Message'
  }]
});
const Chat = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__["model"])('Chat', chatSchema);
/* harmony default export */ __webpack_exports__["default"] = (Chat); ////////
// {
//     id: '1',
//     participants: ['1', '2'],
//     messages: ['1'],
//   },

/***/ }),

/***/ "./src/db/Models/Message.js":
/*!**********************************!*\
  !*** ./src/db/Models/Message.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const messageSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  sender: {
    type: String,
    required: true
  },
  // recipient: {
  //   type: String,
  //   required: true,
  // },
  chat: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.ObjectId,
    ref: 'Chat'
  }
});
const Message = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__["model"])('Message', messageSchema);
/* harmony default export */ __webpack_exports__["default"] = (Message); ////////////
// {
//         id: '1',
//         content: 'You on your way?',
//         createdAt: new Date(new Date('1-1-2019').getTime() - 60 * 1000 * 1000),
//         sender: '1',
//         recipient: '2',
//       }

/***/ }),

/***/ "./src/db/Models/User.js":
/*!*******************************!*\
  !*** ./src/db/Models/User.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);


const userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  picture: {
    type: String
  },
  chats: [{
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.ObjectId,
    ref: 'Chat'
  }]
});
userSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await Object(bcrypt__WEBPACK_IMPORTED_MODULE_1__["hash"])(user.password, 8);
  }

  next();
});
const User = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__["model"])('User', userSchema);
/* harmony default export */ __webpack_exports__["default"] = (User); /////////////
//      {
//         id: '1',
//         name: 'Ray Edwards',
//         username: 'ray',
//         password:
//           '$2a$08$NO9tkFLCoSqX1c5wk3s7z.JfxaVMKA.m7zUDdDwEquo4rvzimQeJm', // 111
//         picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
//       }

/***/ }),

/***/ "./src/db/Models/index.js":
/*!********************************!*\
  !*** ./src/db/Models/index.js ***!
  \********************************/
/*! exports provided: User, Message, Chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/db/Models/User.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _User__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message */ "./src/db/Models/Message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _Message__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chat */ "./src/db/Models/Chat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return _Chat__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/db/index.js":
/*!*************************!*\
  !*** ./src/db/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

let mongoURI = 'mongodb://mongo:27017/bacadb'; // let mongoURI = 'mongodb://localhost:27017/bacadb';

const connectDatabase = async () => {
  try {
    await Object(mongoose__WEBPACK_IMPORTED_MODULE_0__["connect"])(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log('Database connected 🦇');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (connectDatabase);

/***/ }),

/***/ "./src/env.js":
/*!********************!*\
  !*** ./src/env.js ***!
  \********************/
/*! exports provided: expiration, secret, origin, port, dbUri */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expiration", function() { return expiration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secret", function() { return secret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "origin", function() { return origin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "port", function() { return port; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbUri", function() { return dbUri; });
const expiration = process.env.JWT_EXPIRATION_MS ? parseInt(process.env.JWT_EXPIRATION_MS) : 24 * 60 * 60 * 1000;
const secret = process.env.JWT_SECRET || 'b4c4ch47';
const origin = process.env.ORIGIN || 'http://localhost:3000';
const port = process.env.PORT || 4000;
const dbUri = 'mongodb://mongo:27017';

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./db */ "./src/db/index.js");
/* harmony import */ var _db_Models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./db/Models */ "./src/db/Models/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./env */ "./src/env.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./schema */ "./src/schema/index.js");









Object(_db__WEBPACK_IMPORTED_MODULE_5__["default"])();
const pubsub = new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["PubSub"]();
const server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["ApolloServer"]({
  schema: _schema__WEBPACK_IMPORTED_MODULE_8__["default"],
  context: async session => {
    // Access the request object
    let req = session.connection ? session.connection.context.request : session.req; // It's subscription

    if (session.connection) {
      req.cookies = cookie__WEBPACK_IMPORTED_MODULE_1___default.a.parse(req.headers.cookie || '');
    }

    let currentUser;

    if (req.cookies.authToken) {
      const username = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.verify(req.cookies.authToken, _env__WEBPACK_IMPORTED_MODULE_7__["secret"]); // currentUser = username && users.find((u) => u.username === username);

      currentUser = await _db_Models__WEBPACK_IMPORTED_MODULE_6__["User"].findOne({
        username
      });
    }

    return {
      currentUser,
      pubsub,
      res: session.res
    };
  },
  subscriptions: {
    onConnect(params, ws, ctx) {
      // pass the request object to context
      return {
        request: ctx.request
      };
    } // path: '/ws',


  }
});
server.applyMiddleware({
  app: _app__WEBPACK_IMPORTED_MODULE_4__["app"],
  path: '/graphql',
  cors: {
    credentials: true,
    origin: _env__WEBPACK_IMPORTED_MODULE_7__["origin"]
  }
});
const httpServer = http__WEBPACK_IMPORTED_MODULE_2___default.a.createServer(_app__WEBPACK_IMPORTED_MODULE_4__["app"]);
server.installSubscriptionHandlers(httpServer);
httpServer.listen(_env__WEBPACK_IMPORTED_MODULE_7__["port"], () => {
  console.log(`Server is listening on port ${_env__WEBPACK_IMPORTED_MODULE_7__["port"]}`);
});

/***/ }),

/***/ "./src/schema/index.js":
/*!*****************************!*\
  !*** ./src/schema/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-import */ "graphql-import");
/* harmony import */ var graphql_import__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_import__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tools */ "graphql-tools");
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers */ "./src/schema/resolvers.js");



const typeDefs = Object(graphql_import__WEBPACK_IMPORTED_MODULE_0__["importSchema"])('src/schema/typeDefs.graphql');
/* harmony default export */ __webpack_exports__["default"] = (Object(graphql_tools__WEBPACK_IMPORTED_MODULE_1__["makeExecutableSchema"])({
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_2__["default"],
  typeDefs
}));

/***/ }),

/***/ "./src/schema/resolvers.js":
/*!*********************************!*\
  !*** ./src/schema/resolvers.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_scalars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-scalars */ "graphql-scalars");
/* harmony import */ var graphql_scalars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_scalars__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db */ "./src/db/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env */ "./src/env.js");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validators */ "./src/validators.js");
/* harmony import */ var _db_Models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../db/Models */ "./src/db/Models/index.js");








const resolvers = {
  Date: graphql_scalars__WEBPACK_IMPORTED_MODULE_1__["DateTimeResolver"],
  URL: graphql_scalars__WEBPACK_IMPORTED_MODULE_1__["URLResolver"],
  Message: {
    async chat(message) {
      return await _db_Models__WEBPACK_IMPORTED_MODULE_7__["Chat"].findOne({
        messages: message.id
      });
    },

    async sender(message) {
      return await _db_Models__WEBPACK_IMPORTED_MODULE_7__["User"].findOne({
        _id: message.sender
      });
    },

    async recipient(message) {
      return await _db_Models__WEBPACK_IMPORTED_MODULE_7__["User"].findOne({
        _id: message.recipient
      });
    },

    isMine(message, args, {
      currentUser
    }) {
      return message.sender === currentUser.id;
    }

  },
  Chat: {
    async name(chat, args, {
      currentUser
    }) {
      if (!currentUser) return null;
      if (chat.name) return chat.name;
      const participants = await _db_Models__WEBPACK_IMPORTED_MODULE_7__["User"].find({
        _id: chat.participants
      });
      const withoutUser = participants.filter(p => p.id != currentUser.id);
      const name = withoutUser.map(p => p.name);
      return participants ? name.join(', ') : null;
    },

    async picture(chat, args, {
      currentUser
    }) {
      if (!currentUser) return null;
      const participantId = chat.participants.find(p => p != currentUser.id);
      if (!participantId) return null;
      const participant = await _db_Models__WEBPACK_IMPORTED_MODULE_7__["User"].findOne({
        _id: participantId
      });
      return participant ? participant.picture : null;
    },

    async messages(chat) {
      return await _db_Models__WEBPACK_IMPORTED_MODULE_7__["Message"].find({
        chat: chat.id
      });
    },

    async participants(chat) {
      return await _db_Models__WEBPACK_IMPORTED_MODULE_7__["User"].find({
        _id: chat.participants
      });
    },

    async lastMessage(chat) {
      const lastMessage = chat.messages[chat.messages.length - 1];
      return await _db_Models__WEBPACK_IMPORTED_MODULE_7__["Message"].findOne({
        _id: lastMessage
      });
    }

  },
  Query: {
    me(root, args, {
      currentUser
    }) {
      return currentUser || null;
    },

    async chats(root, args, {
      currentUser
    }) {
      if (!currentUser) return [];
      return await _db_Models__WEBPACK_IMPORTED_MODULE_7__["Chat"].find({
        participants: currentUser.id
      });
    },

    async chat(root, {
      chatId
    }, {
      currentUser
    }) {
      if (!currentUser) return null;
      const chat = await _db_Models__WEBPACK_IMPORTED_MODULE_7__["Chat"].findOne({
        _id: chatId
      });
      if (!chat) return null;
      return chat.participants.includes(currentUser.id) ? chat : null;
    },

    async users(root, args, {
      currentUser
    }) {
      if (!currentUser) return [];
      return await _db_Models__WEBPACK_IMPORTED_MODULE_7__["User"].find({
        _id: {
          $nin: [currentUser.id]
        }
      });
    }

  },
  Mutation: {
    async signIn(root, {
      username,
      password
    }, {
      res
    }) {
      const user = await _db_Models__WEBPACK_IMPORTED_MODULE_7__["User"].findOne({
        username
      });

      if (!user) {
        throw new Error('User not found');
      }

      const passwordsMatch = await Object(bcrypt__WEBPACK_IMPORTED_MODULE_4__["compare"])(password, user.password);

      if (!passwordsMatch) {
        throw new Error('Password is incorrect');
      }

      const authToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default.a.sign(username, _env__WEBPACK_IMPORTED_MODULE_3__["secret"]);
      res.cookie('authToken', authToken, {
        maxAge: _env__WEBPACK_IMPORTED_MODULE_3__["expiration"]
      });
      return user;
    },

    async signUp(root, {
      name,
      username,
      password,
      passwordConfirm
    }) {
      Object(_validators__WEBPACK_IMPORTED_MODULE_6__["validateLength"])('req.name', name, 3, 50);
      Object(_validators__WEBPACK_IMPORTED_MODULE_6__["validateLength"])('req.username', username, 3, 18);
      Object(_validators__WEBPACK_IMPORTED_MODULE_6__["validatePassword"])('req.password', password);

      if (password !== passwordConfirm) {
        throw Error("Password and confirmation don't match");
      }

      if (await _db_Models__WEBPACK_IMPORTED_MODULE_7__["User"].findOne({
        username
      })) {
        throw Error('Username already exists');
      }

      const user = new _db_Models__WEBPACK_IMPORTED_MODULE_7__["User"]({
        password,
        picture: `https://randomuser.me/api/portraits/thumb/lego/${Math.round(Math.random() * 9)}.jpg`,
        username,
        name
      });
      await user.save(user);
      return user;
    },

    async addMessage(root, {
      chatId,
      content
    }, {
      currentUser,
      pubsub
    }) {
      if (!currentUser) return null;
      const chat = await _db_Models__WEBPACK_IMPORTED_MODULE_7__["Chat"].findOne({
        _id: chatId
      });
      if (!chat.participants.includes(currentUser.id)) return null;
      const message = new _db_Models__WEBPACK_IMPORTED_MODULE_7__["Message"]({
        createdAt: new Date(),
        sender: currentUser.id,
        recipient: chat.participants.find(p => p != currentUser.id),
        content,
        chat
      });
      await message.save();
      chat.messages.push(message);
      await chat.save();
      pubsub.publish('messageAdded', {
        messageAdded: message
      });
      console.log('mensaje enviado');
      return message;
    },

    async addChat(root, {
      recipientId
    }, {
      currentUser,
      pubsub
    }) {
      if (!currentUser) return null;
      if (await !_db_Models__WEBPACK_IMPORTED_MODULE_7__["User"].count({
        _id: recipientId
      })) return null; // existing chat

      let chat = await _db_Models__WEBPACK_IMPORTED_MODULE_7__["Chat"].findOne({
        participants: [currentUser.id, ...recipientId]
      });
      if (chat) return chat; // new chat

      chat = new _db_Models__WEBPACK_IMPORTED_MODULE_7__["Chat"]({
        participants: [currentUser.id, ...recipientId],
        messages: []
      });
      await chat.save();
      pubsub.publish('chatAdded', {
        chatAdded: chat
      });
      return chat;
    },

    async removeChat(root, {
      chatId
    }, {
      currentUser,
      pubsub
    }) {
      if (!currentUser) return null;
      const chat = await _db_Models__WEBPACK_IMPORTED_MODULE_7__["Chat"].findOne({
        _id: chatId
      });
      pubsub.publish('chatRemoved', {
        chatRemoved: chat
      });
      if (!chat.participants.some(p => p == currentUser.id)) return null;
      await _db_Models__WEBPACK_IMPORTED_MODULE_7__["Message"].deleteMany({
        chat: chatId
      });
      await _db_Models__WEBPACK_IMPORTED_MODULE_7__["Chat"].findOneAndDelete({
        _id: chatId
      });
      return chatId;
    }

  },
  Subscription: {
    messageAdded: {
      subscribe: Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["withFilter"])((root, args, {
        pubsub
      }) => pubsub.asyncIterator('messageAdded'), async ({
        messageAdded
      }, args, {
        currentUser
      }) => {
        if (!currentUser) return false;
        const chat = await _db_Models__WEBPACK_IMPORTED_MODULE_7__["Chat"].findOne({
          _id: messageAdded.chat
        });
        return chat.participants.includes(currentUser.id);
      })
    },
    chatAdded: {
      subscribe: Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["withFilter"])((root, args, {
        pubsub
      }) => pubsub.asyncIterator('chatAdded'), ({
        chatAdded
      }, args, {
        currentUser
      }) => {
        if (!currentUser) return false;
        return chatAdded.participants.some(p => p == currentUser.id);
      })
    },
    chatRemoved: {
      subscribe: Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["withFilter"])((root, args, {
        pubsub
      }) => pubsub.asyncIterator('chatRemoved'), ({
        chatRemoved
      }, args, {
        currentUser
      }) => {
        if (!currentUser) return false;
        return chatRemoved.participants.some(p => p == currentUser.id);
      })
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (resolvers);

/***/ }),

/***/ "./src/validators.js":
/*!***************************!*\
  !*** ./src/validators.js ***!
  \***************************/
/*! exports provided: validatePassword, validateLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePassword", function() { return validatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateLength", function() { return validateLength; });
const validatePassword = (ctx, str) => {
  if (typeof str !== 'string') {
    throw TypeError(`${ctx} must be a string`);
  }

  validateLength(ctx, str, 8, 30);

  if (!/[a-zA-Z]+/.test(str)) {
    throw TypeError(`${ctx} must contain english letters`);
  }

  if (!/\d+/.test(str)) {
    throw TypeError(`${ctx} must contain numbers`);
  }

  if (!/[^\da-zA-Z]+/.test(str)) {
    throw TypeError(`${ctx} must contain special charachters`);
  }
};
const validateLength = (ctx, str, ...args) => {
  let min, max;

  if (args.length === 1) {
    min = 0;
    max = args[0];
  } else {
    min = args[0];
    max = args[1];
  }

  if (typeof str !== 'string') {
    throw TypeError(`${ctx} must be a string`);
  }

  if (str.length < min) {
    throw TypeError(`${ctx} must be at least ${min} chars long`);
  }

  if (str.length > max) {
    throw TypeError(`${ctx} must contain ${max} chars at most`);
  }
};

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "graphql-import":
/*!*********************************!*\
  !*** external "graphql-import" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-import");

/***/ }),

/***/ "graphql-scalars":
/*!**********************************!*\
  !*** external "graphql-scalars" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-scalars");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGIvTW9kZWxzL0NoYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RiL01vZGVscy9NZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9kYi9Nb2RlbHMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGIvTW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9kYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW52LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWEvcmVzb2x2ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJjcnlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtaW1wb3J0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC1zY2FsYXJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10b29sc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbImFwcCIsImV4cHJlc3MiLCJ1c2UiLCJjb3JzIiwiY3JlZGVudGlhbHMiLCJvcmlnaW4iLCJqc29uIiwiY29va2llUGFyc2VyIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZCIsImNoYXRTY2hlbWEiLCJTY2hlbWEiLCJwYXJ0aWNpcGFudHMiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsIm1lc3NhZ2VzIiwiQ2hhdCIsIm1vZGVsIiwibWVzc2FnZVNjaGVtYSIsImNvbnRlbnQiLCJTdHJpbmciLCJyZXF1aXJlZCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJkZWZhdWx0Iiwibm93Iiwic2VuZGVyIiwiY2hhdCIsIk1lc3NhZ2UiLCJ1c2VyU2NoZW1hIiwibmFtZSIsInVzZXJuYW1lIiwidW5pcXVlIiwicGFzc3dvcmQiLCJwaWN0dXJlIiwiY2hhdHMiLCJwcmUiLCJuZXh0IiwidXNlciIsImlzTW9kaWZpZWQiLCJoYXNoIiwiVXNlciIsIm1vbmdvVVJJIiwiY29ubmVjdERhdGFiYXNlIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInByb2Nlc3MiLCJleGl0IiwiZXhwaXJhdGlvbiIsImVudiIsIkpXVF9FWFBJUkFUSU9OX01TIiwicGFyc2VJbnQiLCJzZWNyZXQiLCJKV1RfU0VDUkVUIiwiT1JJR0lOIiwicG9ydCIsIlBPUlQiLCJkYlVyaSIsInB1YnN1YiIsIlB1YlN1YiIsInNlcnZlciIsIkFwb2xsb1NlcnZlciIsInNjaGVtYSIsImNvbnRleHQiLCJzZXNzaW9uIiwiY29ubmVjdGlvbiIsInJlcXVlc3QiLCJjb29raWVzIiwiY29va2llIiwicGFyc2UiLCJoZWFkZXJzIiwiY3VycmVudFVzZXIiLCJhdXRoVG9rZW4iLCJqd3QiLCJ2ZXJpZnkiLCJmaW5kT25lIiwic3Vic2NyaXB0aW9ucyIsIm9uQ29ubmVjdCIsInBhcmFtcyIsIndzIiwiY3R4IiwiYXBwbHlNaWRkbGV3YXJlIiwicGF0aCIsImh0dHBTZXJ2ZXIiLCJodHRwIiwiY3JlYXRlU2VydmVyIiwiaW5zdGFsbFN1YnNjcmlwdGlvbkhhbmRsZXJzIiwibGlzdGVuIiwidHlwZURlZnMiLCJpbXBvcnRTY2hlbWEiLCJtYWtlRXhlY3V0YWJsZVNjaGVtYSIsInJlc29sdmVycyIsIkRhdGVUaW1lUmVzb2x2ZXIiLCJVUkwiLCJVUkxSZXNvbHZlciIsIm1lc3NhZ2UiLCJpZCIsIl9pZCIsInJlY2lwaWVudCIsImlzTWluZSIsImFyZ3MiLCJmaW5kIiwid2l0aG91dFVzZXIiLCJmaWx0ZXIiLCJwIiwibWFwIiwiam9pbiIsInBhcnRpY2lwYW50SWQiLCJwYXJ0aWNpcGFudCIsImxhc3RNZXNzYWdlIiwibGVuZ3RoIiwiUXVlcnkiLCJtZSIsInJvb3QiLCJjaGF0SWQiLCJpbmNsdWRlcyIsInVzZXJzIiwiJG5pbiIsIk11dGF0aW9uIiwic2lnbkluIiwiRXJyb3IiLCJwYXNzd29yZHNNYXRjaCIsImNvbXBhcmUiLCJzaWduIiwibWF4QWdlIiwic2lnblVwIiwicGFzc3dvcmRDb25maXJtIiwidmFsaWRhdGVMZW5ndGgiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwic2F2ZSIsImFkZE1lc3NhZ2UiLCJwdXNoIiwicHVibGlzaCIsIm1lc3NhZ2VBZGRlZCIsImFkZENoYXQiLCJyZWNpcGllbnRJZCIsImNvdW50IiwiY2hhdEFkZGVkIiwicmVtb3ZlQ2hhdCIsImNoYXRSZW1vdmVkIiwic29tZSIsImRlbGV0ZU1hbnkiLCJmaW5kT25lQW5kRGVsZXRlIiwiU3Vic2NyaXB0aW9uIiwic3Vic2NyaWJlIiwid2l0aEZpbHRlciIsImFzeW5jSXRlcmF0b3IiLCJzdHIiLCJUeXBlRXJyb3IiLCJ0ZXN0IiwibWluIiwibWF4Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7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Q0FBRCxDQUFWO0FBQ0Q7O0FBRUQsTUFBSSxPQUFPa0QsR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQzNCLFVBQU1DLFNBQVMsQ0FBRSxHQUFFdkUsR0FBSSxtQkFBUixDQUFmO0FBQ0Q7O0FBRUQsTUFBSXNFLEdBQUcsQ0FBQ3hDLE1BQUosR0FBYTJDLEdBQWpCLEVBQXNCO0FBQ3BCLFVBQU1GLFNBQVMsQ0FBRSxHQUFFdkUsR0FBSSxxQkFBb0J5RSxHQUFJLGFBQWhDLENBQWY7QUFDRDs7QUFFRCxNQUFJSCxHQUFHLENBQUN4QyxNQUFKLEdBQWE0QyxHQUFqQixFQUFzQjtBQUNwQixVQUFNSCxTQUFTLENBQUUsR0FBRXZFLEdBQUksaUJBQWdCMEUsR0FBSSxnQkFBNUIsQ0FBZjtBQUNEO0FBQ0YsQ0F0Qk0sQzs7Ozs7Ozs7Ozs7QUNwQlAsa0Q7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XG5pbXBvcnQgY29va2llUGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInO1xuaW1wb3J0IHsgb3JpZ2luIH0gZnJvbSAnLi9lbnYnO1xuXG4vLyBjb25zb2xlLmxvZyhkYi5jb25uZWN0RGF0YWJhc2UpO1xuXG5leHBvcnQgY29uc3QgYXBwID0gZXhwcmVzcygpO1xuLy8gYXBwLnNldE1heExpc3RlbmVycygwKTtcbmFwcC51c2UoY29ycyh7IGNyZWRlbnRpYWxzOiB0cnVlLCBvcmlnaW4gfSkpO1xuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcblxuYXBwLmdldCgnL19waW5nJywgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKCdwb25nJyk7XG59KTtcbiIsImltcG9ydCB7IFNjaGVtYSwgbW9kZWwgfSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IGNoYXRTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgcGFydGljaXBhbnRzOiBbXG4gICAge1xuICAgICAgLy8gdHlwZTogW1N0cmluZ10sXG4gICAgICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICByZWY6ICdVc2VyJyxcbiAgICB9LFxuICBdLFxuICBtZXNzYWdlczogW1xuICAgIHtcbiAgICAgIC8vIHR5cGU6IFtTdHJpbmddLFxuICAgICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgcmVmOiAnTWVzc2FnZScsXG4gICAgfSxcbiAgXSxcbn0pO1xuXG5jb25zdCBDaGF0ID0gbW9kZWwoJ0NoYXQnLCBjaGF0U2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcblxuLy8vLy8vLy9cbi8vIHtcbi8vICAgICBpZDogJzEnLFxuLy8gICAgIHBhcnRpY2lwYW50czogWycxJywgJzInXSxcbi8vICAgICBtZXNzYWdlczogWycxJ10sXG4vLyAgIH0sXG4iLCJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsIH0gZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBtZXNzYWdlU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIGNvbnRlbnQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIGNyZWF0ZWRBdDoge1xuICAgIHR5cGU6IERhdGUsXG4gICAgZGVmYXVsdDogRGF0ZS5ub3coKSxcbiAgfSxcbiAgc2VuZGVyOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICAvLyByZWNpcGllbnQ6IHtcbiAgLy8gICB0eXBlOiBTdHJpbmcsXG4gIC8vICAgcmVxdWlyZWQ6IHRydWUsXG4gIC8vIH0sXG4gIGNoYXQ6IHtcbiAgICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgcmVmOiAnQ2hhdCcsXG4gIH0sXG59KTtcblxuY29uc3QgTWVzc2FnZSA9IG1vZGVsKCdNZXNzYWdlJywgbWVzc2FnZVNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7XG5cbi8vLy8vLy8vLy8vL1xuXG4vLyB7XG4vLyAgICAgICAgIGlkOiAnMScsXG4vLyAgICAgICAgIGNvbnRlbnQ6ICdZb3Ugb24geW91ciB3YXk/Jyxcbi8vICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZShuZXcgRGF0ZSgnMS0xLTIwMTknKS5nZXRUaW1lKCkgLSA2MCAqIDEwMDAgKiAxMDAwKSxcbi8vICAgICAgICAgc2VuZGVyOiAnMScsXG4vLyAgICAgICAgIHJlY2lwaWVudDogJzInLFxuLy8gICAgICAgfVxuIiwiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IGhhc2ggfSBmcm9tICdiY3J5cHQnO1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIG5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHVzZXJuYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHVuaXF1ZTogdHJ1ZSxcbiAgfSxcbiAgcGFzc3dvcmQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHBpY3R1cmU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gIH0sXG4gIGNoYXRzOiBbXG4gICAge1xuICAgICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgcmVmOiAnQ2hhdCcsXG4gICAgfSxcbiAgXSxcbn0pO1xuXG51c2VyU2NoZW1hLnByZSgnc2F2ZScsIGFzeW5jIGZ1bmN0aW9uIChuZXh0KSB7XG4gIGNvbnN0IHVzZXIgPSB0aGlzO1xuICBpZiAodXNlci5pc01vZGlmaWVkKCdwYXNzd29yZCcpKSB7XG4gICAgdXNlci5wYXNzd29yZCA9IGF3YWl0IGhhc2godXNlci5wYXNzd29yZCwgOCk7XG4gIH1cbiAgbmV4dCgpO1xufSk7XG5cbmNvbnN0IFVzZXIgPSBtb2RlbCgnVXNlcicsIHVzZXJTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuXG4vLy8vLy8vLy8vLy8vXG5cbi8vICAgICAge1xuLy8gICAgICAgICBpZDogJzEnLFxuLy8gICAgICAgICBuYW1lOiAnUmF5IEVkd2FyZHMnLFxuLy8gICAgICAgICB1c2VybmFtZTogJ3JheScsXG4vLyAgICAgICAgIHBhc3N3b3JkOlxuLy8gICAgICAgICAgICckMmEkMDgkTk85dGtGTENvU3FYMWM1d2szczd6LkpmeGFWTUtBLm03elVEZER3RXF1bzRydnppbVFlSm0nLCAvLyAxMTFcbi8vICAgICAgICAgcGljdHVyZTogJ2h0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL3RodW1iL2xlZ28vMS5qcGcnLFxuLy8gICAgICAgfVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VyIH0gZnJvbSAnLi9Vc2VyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWVzc2FnZSB9IGZyb20gJy4vTWVzc2FnZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENoYXQgfSBmcm9tICcuL0NoYXQnO1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ21vbmdvb3NlJztcblxubGV0IG1vbmdvVVJJID0gJ21vbmdvZGI6Ly9tb25nbzoyNzAxNy9iYWNhZGInO1xuLy8gbGV0IG1vbmdvVVJJID0gJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmFjYWRiJztcblxuY29uc3QgY29ubmVjdERhdGFiYXNlID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGNvbm5lY3QobW9uZ29VUkksIHtcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxuICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ0RhdGFiYXNlIGNvbm5lY3RlZCDwn6aHJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0RGF0YWJhc2U7XG4iLCJleHBvcnQgY29uc3QgZXhwaXJhdGlvbiA9IHByb2Nlc3MuZW52LkpXVF9FWFBJUkFUSU9OX01TXG4gID8gcGFyc2VJbnQocHJvY2Vzcy5lbnYuSldUX0VYUElSQVRJT05fTVMpXG4gIDogMjQgKiA2MCAqIDYwICogMTAwMDtcbmV4cG9ydCBjb25zdCBzZWNyZXQgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUIHx8ICdiNGM0Y2g0Nyc7XG5leHBvcnQgY29uc3Qgb3JpZ2luID0gcHJvY2Vzcy5lbnYuT1JJR0lOIHx8ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xuZXhwb3J0IGNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQwMDA7XG5leHBvcnQgY29uc3QgZGJVcmkgPSAnbW9uZ29kYjovL21vbmdvOjI3MDE3JztcbiIsImltcG9ydCB7IEFwb2xsb1NlcnZlciwgZ3FsLCBQdWJTdWIgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWUnO1xuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgeyBhcHAgfSBmcm9tICcuL2FwcCc7XG5pbXBvcnQgY29ubmVjdERhdGFiYXNlIGZyb20gJy4vZGInO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vZGIvTW9kZWxzJztcbmltcG9ydCB7IG9yaWdpbiwgcG9ydCwgc2VjcmV0IH0gZnJvbSAnLi9lbnYnO1xuaW1wb3J0IHNjaGVtYSBmcm9tICcuL3NjaGVtYSc7XG5cbmNvbm5lY3REYXRhYmFzZSgpO1xuXG5jb25zdCBwdWJzdWIgPSBuZXcgUHViU3ViKCk7XG5cbmNvbnN0IHNlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xuICBzY2hlbWEsXG4gIGNvbnRleHQ6IGFzeW5jIChzZXNzaW9uKSA9PiB7XG4gICAgLy8gQWNjZXNzIHRoZSByZXF1ZXN0IG9iamVjdFxuICAgIGxldCByZXEgPSBzZXNzaW9uLmNvbm5lY3Rpb25cbiAgICAgID8gc2Vzc2lvbi5jb25uZWN0aW9uLmNvbnRleHQucmVxdWVzdFxuICAgICAgOiBzZXNzaW9uLnJlcTtcblxuICAgIC8vIEl0J3Mgc3Vic2NyaXB0aW9uXG4gICAgaWYgKHNlc3Npb24uY29ubmVjdGlvbikge1xuICAgICAgcmVxLmNvb2tpZXMgPSBjb29raWUucGFyc2UocmVxLmhlYWRlcnMuY29va2llIHx8ICcnKTtcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudFVzZXI7XG4gICAgaWYgKHJlcS5jb29raWVzLmF1dGhUb2tlbikge1xuICAgICAgY29uc3QgdXNlcm5hbWUgPSBqd3QudmVyaWZ5KHJlcS5jb29raWVzLmF1dGhUb2tlbiwgc2VjcmV0KTtcbiAgICAgIC8vIGN1cnJlbnRVc2VyID0gdXNlcm5hbWUgJiYgdXNlcnMuZmluZCgodSkgPT4gdS51c2VybmFtZSA9PT0gdXNlcm5hbWUpO1xuICAgICAgY3VycmVudFVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyB1c2VybmFtZSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFVzZXIsXG4gICAgICBwdWJzdWIsXG4gICAgICByZXM6IHNlc3Npb24ucmVzLFxuICAgIH07XG4gIH0sXG4gIHN1YnNjcmlwdGlvbnM6IHtcbiAgICBvbkNvbm5lY3QocGFyYW1zLCB3cywgY3R4KSB7XG4gICAgICAvLyBwYXNzIHRoZSByZXF1ZXN0IG9iamVjdCB0byBjb250ZXh0XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZXF1ZXN0OiBjdHgucmVxdWVzdCxcbiAgICAgIH07XG4gICAgfSxcbiAgICAvLyBwYXRoOiAnL3dzJyxcbiAgfSxcbn0pO1xuXG5zZXJ2ZXIuYXBwbHlNaWRkbGV3YXJlKHtcbiAgYXBwLFxuICBwYXRoOiAnL2dyYXBocWwnLFxuICBjb3JzOiB7IGNyZWRlbnRpYWxzOiB0cnVlLCBvcmlnaW4gfSxcbn0pO1xuXG5jb25zdCBodHRwU2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKTtcbnNlcnZlci5pbnN0YWxsU3Vic2NyaXB0aW9uSGFuZGxlcnMoaHR0cFNlcnZlcik7XG5cbmh0dHBTZXJ2ZXIubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYFNlcnZlciBpcyBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbiIsImltcG9ydCB7IGltcG9ydFNjaGVtYSB9IGZyb20gJ2dyYXBocWwtaW1wb3J0JztcbmltcG9ydCB7IG1ha2VFeGVjdXRhYmxlU2NoZW1hIH0gZnJvbSAnZ3JhcGhxbC10b29scyc7XG5pbXBvcnQgcmVzb2x2ZXJzIGZyb20gJy4vcmVzb2x2ZXJzJztcblxuY29uc3QgdHlwZURlZnMgPSBpbXBvcnRTY2hlbWEoJ3NyYy9zY2hlbWEvdHlwZURlZnMuZ3JhcGhxbCcpO1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlRXhlY3V0YWJsZVNjaGVtYSh7IHJlc29sdmVycywgdHlwZURlZnMgfSk7XG4iLCJpbXBvcnQgeyB3aXRoRmlsdGVyIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbmltcG9ydCB7IERhdGVUaW1lUmVzb2x2ZXIsIFVSTFJlc29sdmVyIH0gZnJvbSAnZ3JhcGhxbC1zY2FsYXJzJztcbmltcG9ydCB7IGNoYXRzLCBtZXNzYWdlcywgdXNlcnMgfSBmcm9tICcuLi9kYic7XG5pbXBvcnQgeyBzZWNyZXQsIGV4cGlyYXRpb24sIGRiVXJpIH0gZnJvbSAnLi4vZW52JztcbmltcG9ydCB7IGNvbXBhcmUsIGhhc2ggfSBmcm9tICdiY3J5cHQnO1xuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IHsgdmFsaWRhdGVMZW5ndGgsIHZhbGlkYXRlUGFzc3dvcmQgfSBmcm9tICcuLi92YWxpZGF0b3JzJztcbmltcG9ydCB7IFVzZXIsIE1lc3NhZ2UsIENoYXQgfSBmcm9tICcuLi9kYi9Nb2RlbHMnO1xuXG5jb25zdCByZXNvbHZlcnMgPSB7XG4gIERhdGU6IERhdGVUaW1lUmVzb2x2ZXIsXG5cbiAgVVJMOiBVUkxSZXNvbHZlcixcblxuICBNZXNzYWdlOiB7XG4gICAgYXN5bmMgY2hhdChtZXNzYWdlKSB7XG4gICAgICByZXR1cm4gYXdhaXQgQ2hhdC5maW5kT25lKHsgbWVzc2FnZXM6IG1lc3NhZ2UuaWQgfSk7XG4gICAgfSxcbiAgICBhc3luYyBzZW5kZXIobWVzc2FnZSkge1xuICAgICAgcmV0dXJuIGF3YWl0IFVzZXIuZmluZE9uZSh7IF9pZDogbWVzc2FnZS5zZW5kZXIgfSk7XG4gICAgfSxcbiAgICBhc3luYyByZWNpcGllbnQobWVzc2FnZSkge1xuICAgICAgcmV0dXJuIGF3YWl0IFVzZXIuZmluZE9uZSh7IF9pZDogbWVzc2FnZS5yZWNpcGllbnQgfSk7XG4gICAgfSxcbiAgICBpc01pbmUobWVzc2FnZSwgYXJncywgeyBjdXJyZW50VXNlciB9KSB7XG4gICAgICByZXR1cm4gbWVzc2FnZS5zZW5kZXIgPT09IGN1cnJlbnRVc2VyLmlkO1xuICAgIH0sXG4gIH0sXG5cbiAgQ2hhdDoge1xuICAgIGFzeW5jIG5hbWUoY2hhdCwgYXJncywgeyBjdXJyZW50VXNlciB9KSB7XG4gICAgICBpZiAoIWN1cnJlbnRVc2VyKSByZXR1cm4gbnVsbDtcbiAgICAgIGlmIChjaGF0Lm5hbWUpIHJldHVybiBjaGF0Lm5hbWU7XG5cbiAgICAgIGNvbnN0IHBhcnRpY2lwYW50cyA9IGF3YWl0IFVzZXIuZmluZCh7IF9pZDogY2hhdC5wYXJ0aWNpcGFudHMgfSk7XG5cbiAgICAgIGNvbnN0IHdpdGhvdXRVc2VyID0gcGFydGljaXBhbnRzLmZpbHRlcigocCkgPT4gcC5pZCAhPSBjdXJyZW50VXNlci5pZCk7XG4gICAgICBjb25zdCBuYW1lID0gd2l0aG91dFVzZXIubWFwKChwKSA9PiBwLm5hbWUpO1xuXG4gICAgICByZXR1cm4gcGFydGljaXBhbnRzID8gbmFtZS5qb2luKCcsICcpIDogbnVsbDtcbiAgICB9LFxuICAgIGFzeW5jIHBpY3R1cmUoY2hhdCwgYXJncywgeyBjdXJyZW50VXNlciB9KSB7XG4gICAgICBpZiAoIWN1cnJlbnRVc2VyKSByZXR1cm4gbnVsbDtcblxuICAgICAgY29uc3QgcGFydGljaXBhbnRJZCA9IGNoYXQucGFydGljaXBhbnRzLmZpbmQoKHApID0+IHAgIT0gY3VycmVudFVzZXIuaWQpO1xuICAgICAgaWYgKCFwYXJ0aWNpcGFudElkKSByZXR1cm4gbnVsbDtcblxuICAgICAgY29uc3QgcGFydGljaXBhbnQgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBfaWQ6IHBhcnRpY2lwYW50SWQgfSk7XG4gICAgICByZXR1cm4gcGFydGljaXBhbnQgPyBwYXJ0aWNpcGFudC5waWN0dXJlIDogbnVsbDtcbiAgICB9LFxuICAgIGFzeW5jIG1lc3NhZ2VzKGNoYXQpIHtcbiAgICAgIHJldHVybiBhd2FpdCBNZXNzYWdlLmZpbmQoeyBjaGF0OiBjaGF0LmlkIH0pO1xuICAgIH0sXG4gICAgYXN5bmMgcGFydGljaXBhbnRzKGNoYXQpIHtcbiAgICAgIHJldHVybiBhd2FpdCBVc2VyLmZpbmQoeyBfaWQ6IGNoYXQucGFydGljaXBhbnRzIH0pO1xuICAgIH0sXG4gICAgYXN5bmMgbGFzdE1lc3NhZ2UoY2hhdCkge1xuICAgICAgY29uc3QgbGFzdE1lc3NhZ2UgPSBjaGF0Lm1lc3NhZ2VzW2NoYXQubWVzc2FnZXMubGVuZ3RoIC0gMV07XG4gICAgICByZXR1cm4gYXdhaXQgTWVzc2FnZS5maW5kT25lKHsgX2lkOiBsYXN0TWVzc2FnZSB9KTtcbiAgICB9LFxuICB9LFxuXG4gIFF1ZXJ5OiB7XG4gICAgbWUocm9vdCwgYXJncywgeyBjdXJyZW50VXNlciB9KSB7XG4gICAgICByZXR1cm4gY3VycmVudFVzZXIgfHwgbnVsbDtcbiAgICB9LFxuICAgIGFzeW5jIGNoYXRzKHJvb3QsIGFyZ3MsIHsgY3VycmVudFVzZXIgfSkge1xuICAgICAgaWYgKCFjdXJyZW50VXNlcikgcmV0dXJuIFtdO1xuICAgICAgcmV0dXJuIGF3YWl0IENoYXQuZmluZCh7IHBhcnRpY2lwYW50czogY3VycmVudFVzZXIuaWQgfSk7XG4gICAgfSxcbiAgICBhc3luYyBjaGF0KHJvb3QsIHsgY2hhdElkIH0sIHsgY3VycmVudFVzZXIgfSkge1xuICAgICAgaWYgKCFjdXJyZW50VXNlcikgcmV0dXJuIG51bGw7XG5cbiAgICAgIGNvbnN0IGNoYXQgPSBhd2FpdCBDaGF0LmZpbmRPbmUoeyBfaWQ6IGNoYXRJZCB9KTtcbiAgICAgIGlmICghY2hhdCkgcmV0dXJuIG51bGw7XG5cbiAgICAgIHJldHVybiBjaGF0LnBhcnRpY2lwYW50cy5pbmNsdWRlcyhjdXJyZW50VXNlci5pZCkgPyBjaGF0IDogbnVsbDtcbiAgICB9LFxuICAgIGFzeW5jIHVzZXJzKHJvb3QsIGFyZ3MsIHsgY3VycmVudFVzZXIgfSkge1xuICAgICAgaWYgKCFjdXJyZW50VXNlcikgcmV0dXJuIFtdO1xuICAgICAgcmV0dXJuIGF3YWl0IFVzZXIuZmluZCh7IF9pZDogeyAkbmluOiBbY3VycmVudFVzZXIuaWRdIH0gfSk7XG4gICAgfSxcbiAgfSxcblxuICBNdXRhdGlvbjoge1xuICAgIGFzeW5jIHNpZ25Jbihyb290LCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9LCB7IHJlcyB9KSB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgdXNlcm5hbWUgfSk7XG5cbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhc3N3b3Jkc01hdGNoID0gYXdhaXQgY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XG5cbiAgICAgIGlmICghcGFzc3dvcmRzTWF0Y2gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXNzd29yZCBpcyBpbmNvcnJlY3QnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYXV0aFRva2VuID0gand0LnNpZ24odXNlcm5hbWUsIHNlY3JldCk7XG5cbiAgICAgIHJlcy5jb29raWUoJ2F1dGhUb2tlbicsIGF1dGhUb2tlbiwgeyBtYXhBZ2U6IGV4cGlyYXRpb24gfSk7XG5cbiAgICAgIHJldHVybiB1c2VyO1xuICAgIH0sXG4gICAgYXN5bmMgc2lnblVwKHJvb3QsIHsgbmFtZSwgdXNlcm5hbWUsIHBhc3N3b3JkLCBwYXNzd29yZENvbmZpcm0gfSkge1xuICAgICAgdmFsaWRhdGVMZW5ndGgoJ3JlcS5uYW1lJywgbmFtZSwgMywgNTApO1xuICAgICAgdmFsaWRhdGVMZW5ndGgoJ3JlcS51c2VybmFtZScsIHVzZXJuYW1lLCAzLCAxOCk7XG4gICAgICB2YWxpZGF0ZVBhc3N3b3JkKCdyZXEucGFzc3dvcmQnLCBwYXNzd29yZCk7XG5cbiAgICAgIGlmIChwYXNzd29yZCAhPT0gcGFzc3dvcmRDb25maXJtKSB7XG4gICAgICAgIHRocm93IEVycm9yKFwiUGFzc3dvcmQgYW5kIGNvbmZpcm1hdGlvbiBkb24ndCBtYXRjaFwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGF3YWl0IFVzZXIuZmluZE9uZSh7IHVzZXJuYW1lIH0pKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdVc2VybmFtZSBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgfVxuICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKHtcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIHBpY3R1cmU6IGBodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy90aHVtYi9sZWdvLyR7TWF0aC5yb3VuZChcbiAgICAgICAgICBNYXRoLnJhbmRvbSgpICogOVxuICAgICAgICApfS5qcGdgLFxuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgbmFtZSxcbiAgICAgIH0pO1xuXG4gICAgICBhd2FpdCB1c2VyLnNhdmUodXNlcik7XG5cbiAgICAgIHJldHVybiB1c2VyO1xuICAgIH0sXG4gICAgYXN5bmMgYWRkTWVzc2FnZShyb290LCB7IGNoYXRJZCwgY29udGVudCB9LCB7IGN1cnJlbnRVc2VyLCBwdWJzdWIgfSkge1xuICAgICAgaWYgKCFjdXJyZW50VXNlcikgcmV0dXJuIG51bGw7XG5cbiAgICAgIGNvbnN0IGNoYXQgPSBhd2FpdCBDaGF0LmZpbmRPbmUoeyBfaWQ6IGNoYXRJZCB9KTtcbiAgICAgIGlmICghY2hhdC5wYXJ0aWNpcGFudHMuaW5jbHVkZXMoY3VycmVudFVzZXIuaWQpKSByZXR1cm4gbnVsbDtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZSh7XG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgICAgc2VuZGVyOiBjdXJyZW50VXNlci5pZCxcbiAgICAgICAgcmVjaXBpZW50OiBjaGF0LnBhcnRpY2lwYW50cy5maW5kKChwKSA9PiBwICE9IGN1cnJlbnRVc2VyLmlkKSxcbiAgICAgICAgY29udGVudCxcbiAgICAgICAgY2hhdCxcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgbWVzc2FnZS5zYXZlKCk7XG5cbiAgICAgIGNoYXQubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgIGF3YWl0IGNoYXQuc2F2ZSgpO1xuXG4gICAgICBwdWJzdWIucHVibGlzaCgnbWVzc2FnZUFkZGVkJywge1xuICAgICAgICBtZXNzYWdlQWRkZWQ6IG1lc3NhZ2UsXG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coJ21lbnNhamUgZW52aWFkbycpO1xuXG4gICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9LFxuICAgIGFzeW5jIGFkZENoYXQocm9vdCwgeyByZWNpcGllbnRJZCB9LCB7IGN1cnJlbnRVc2VyLCBwdWJzdWIgfSkge1xuICAgICAgaWYgKCFjdXJyZW50VXNlcikgcmV0dXJuIG51bGw7XG4gICAgICBpZiAoYXdhaXQgIVVzZXIuY291bnQoeyBfaWQ6IHJlY2lwaWVudElkIH0pKSByZXR1cm4gbnVsbDtcblxuICAgICAgLy8gZXhpc3RpbmcgY2hhdFxuICAgICAgbGV0IGNoYXQgPSBhd2FpdCBDaGF0LmZpbmRPbmUoe1xuICAgICAgICBwYXJ0aWNpcGFudHM6IFtjdXJyZW50VXNlci5pZCwgLi4ucmVjaXBpZW50SWRdLFxuICAgICAgfSk7XG4gICAgICBpZiAoY2hhdCkgcmV0dXJuIGNoYXQ7XG5cbiAgICAgIC8vIG5ldyBjaGF0XG4gICAgICBjaGF0ID0gbmV3IENoYXQoe1xuICAgICAgICBwYXJ0aWNpcGFudHM6IFtjdXJyZW50VXNlci5pZCwgLi4ucmVjaXBpZW50SWRdLFxuICAgICAgICBtZXNzYWdlczogW10sXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IGNoYXQuc2F2ZSgpO1xuXG4gICAgICBwdWJzdWIucHVibGlzaCgnY2hhdEFkZGVkJywge1xuICAgICAgICBjaGF0QWRkZWQ6IGNoYXQsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGNoYXQ7XG4gICAgfSxcbiAgICBhc3luYyByZW1vdmVDaGF0KHJvb3QsIHsgY2hhdElkIH0sIHsgY3VycmVudFVzZXIsIHB1YnN1YiB9KSB7XG4gICAgICBpZiAoIWN1cnJlbnRVc2VyKSByZXR1cm4gbnVsbDtcblxuICAgICAgY29uc3QgY2hhdCA9IGF3YWl0IENoYXQuZmluZE9uZSh7IF9pZDogY2hhdElkIH0pO1xuXG4gICAgICBwdWJzdWIucHVibGlzaCgnY2hhdFJlbW92ZWQnLCB7XG4gICAgICAgIGNoYXRSZW1vdmVkOiBjaGF0LFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghY2hhdC5wYXJ0aWNpcGFudHMuc29tZSgocCkgPT4gcCA9PSBjdXJyZW50VXNlci5pZCkpIHJldHVybiBudWxsO1xuICAgICAgYXdhaXQgTWVzc2FnZS5kZWxldGVNYW55KHsgY2hhdDogY2hhdElkIH0pO1xuXG4gICAgICBhd2FpdCBDaGF0LmZpbmRPbmVBbmREZWxldGUoeyBfaWQ6IGNoYXRJZCB9KTtcblxuICAgICAgcmV0dXJuIGNoYXRJZDtcbiAgICB9LFxuICB9LFxuXG4gIFN1YnNjcmlwdGlvbjoge1xuICAgIG1lc3NhZ2VBZGRlZDoge1xuICAgICAgc3Vic2NyaWJlOiB3aXRoRmlsdGVyKFxuICAgICAgICAocm9vdCwgYXJncywgeyBwdWJzdWIgfSkgPT4gcHVic3ViLmFzeW5jSXRlcmF0b3IoJ21lc3NhZ2VBZGRlZCcpLFxuICAgICAgICBhc3luYyAoeyBtZXNzYWdlQWRkZWQgfSwgYXJncywgeyBjdXJyZW50VXNlciB9KSA9PiB7XG4gICAgICAgICAgaWYgKCFjdXJyZW50VXNlcikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGNvbnN0IGNoYXQgPSBhd2FpdCBDaGF0LmZpbmRPbmUoeyBfaWQ6IG1lc3NhZ2VBZGRlZC5jaGF0IH0pO1xuICAgICAgICAgIHJldHVybiBjaGF0LnBhcnRpY2lwYW50cy5pbmNsdWRlcyhjdXJyZW50VXNlci5pZCk7XG4gICAgICAgIH1cbiAgICAgICksXG4gICAgfSxcbiAgICBjaGF0QWRkZWQ6IHtcbiAgICAgIHN1YnNjcmliZTogd2l0aEZpbHRlcihcbiAgICAgICAgKHJvb3QsIGFyZ3MsIHsgcHVic3ViIH0pID0+IHB1YnN1Yi5hc3luY0l0ZXJhdG9yKCdjaGF0QWRkZWQnKSxcbiAgICAgICAgKHsgY2hhdEFkZGVkIH0sIGFyZ3MsIHsgY3VycmVudFVzZXIgfSkgPT4ge1xuICAgICAgICAgIGlmICghY3VycmVudFVzZXIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gY2hhdEFkZGVkLnBhcnRpY2lwYW50cy5zb21lKChwKSA9PiBwID09IGN1cnJlbnRVc2VyLmlkKTtcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICB9LFxuICAgIGNoYXRSZW1vdmVkOiB7XG4gICAgICBzdWJzY3JpYmU6IHdpdGhGaWx0ZXIoXG4gICAgICAgIChyb290LCBhcmdzLCB7IHB1YnN1YiB9KSA9PiBwdWJzdWIuYXN5bmNJdGVyYXRvcignY2hhdFJlbW92ZWQnKSxcbiAgICAgICAgKHsgY2hhdFJlbW92ZWQgfSwgYXJncywgeyBjdXJyZW50VXNlciB9KSA9PiB7XG4gICAgICAgICAgaWYgKCFjdXJyZW50VXNlcikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIHJldHVybiBjaGF0UmVtb3ZlZC5wYXJ0aWNpcGFudHMuc29tZSgocCkgPT4gcCA9PSBjdXJyZW50VXNlci5pZCk7XG4gICAgICAgIH1cbiAgICAgICksXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVycztcbiIsImV4cG9ydCBjb25zdCB2YWxpZGF0ZVBhc3N3b3JkID0gKGN0eCwgc3RyKSA9PiB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IFR5cGVFcnJvcihgJHtjdHh9IG11c3QgYmUgYSBzdHJpbmdgKTtcbiAgfVxuXG4gIHZhbGlkYXRlTGVuZ3RoKGN0eCwgc3RyLCA4LCAzMCk7XG5cbiAgaWYgKCEvW2EtekEtWl0rLy50ZXN0KHN0cikpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoYCR7Y3R4fSBtdXN0IGNvbnRhaW4gZW5nbGlzaCBsZXR0ZXJzYCk7XG4gIH1cblxuICBpZiAoIS9cXGQrLy50ZXN0KHN0cikpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoYCR7Y3R4fSBtdXN0IGNvbnRhaW4gbnVtYmVyc2ApO1xuICB9XG5cbiAgaWYgKCEvW15cXGRhLXpBLVpdKy8udGVzdChzdHIpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKGAke2N0eH0gbXVzdCBjb250YWluIHNwZWNpYWwgY2hhcmFjaHRlcnNgKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlTGVuZ3RoID0gKGN0eCwgc3RyLCAuLi5hcmdzKSA9PiB7XG4gIGxldCBtaW4sIG1heDtcblxuICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICBtaW4gPSAwO1xuICAgIG1heCA9IGFyZ3NbMF07XG4gIH0gZWxzZSB7XG4gICAgbWluID0gYXJnc1swXTtcbiAgICBtYXggPSBhcmdzWzFdO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKGAke2N0eH0gbXVzdCBiZSBhIHN0cmluZ2ApO1xuICB9XG5cbiAgaWYgKHN0ci5sZW5ndGggPCBtaW4pIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoYCR7Y3R4fSBtdXN0IGJlIGF0IGxlYXN0ICR7bWlufSBjaGFycyBsb25nYCk7XG4gIH1cblxuICBpZiAoc3RyLmxlbmd0aCA+IG1heCkge1xuICAgIHRocm93IFR5cGVFcnJvcihgJHtjdHh9IG11c3QgY29udGFpbiAke21heH0gY2hhcnMgYXQgbW9zdGApO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC1pbXBvcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC1zY2FsYXJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdG9vbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==