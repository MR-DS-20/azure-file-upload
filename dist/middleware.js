"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
var multer_1 = __importDefault(require("multer"));
var bodyParser = require("body-parser");
var cors = require('cors');
var inMemoryStorage = multer_1.default.memoryStorage();
// const uploadStrategy = multer({ storage: inMemoryStorage }).single("file");
exports.middleware = [
    // session({
    //     secret: env()?.adminCreds?.secret ?? '',
    //     resave: true,
    //     saveUninitialized: true
    // }),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    multer_1.default({ storage: inMemoryStorage }).single("file"),
    cors(),
    function (req, res, next) {
        res.set('Cache-Control', 'no-store, max-age=0');
        next();
    },
    function (req, res, next) {
        res.header("Access-Control-Allow-Origin");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    },
];
