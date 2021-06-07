import session from 'express-session';
import { Multer } from 'multer';
import multer from 'multer';
import bodyParser = require('body-parser');

import { env } from './environment/env';

import { Response, Request, NextFunction } from 'express'

const cors = require('cors');

const inMemoryStorage = multer.memoryStorage();
// const uploadStrategy = multer({ storage: inMemoryStorage }).single("file");

export const middleware = [
    // session({
    //     secret: env()?.adminCreds?.secret ?? '',
    //     resave: true,
    //     saveUninitialized: true
    // }),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    multer({ storage: inMemoryStorage }).single("file"),
    cors(),
    function (req: Request, res: Response, next: NextFunction) {
        res.set('Cache-Control', 'no-store, max-age=0')
        next()
    },
    function (req: Request, res: Response, next: NextFunction) {
        res.header("Access-Control-Allow-Origin");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    },
]