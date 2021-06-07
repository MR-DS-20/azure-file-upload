"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = void 0;
exports.ENV = {
    stage: process.env.NODE_ENV,
    port: 8082,
    domain: (_a = process.env.DOMAIN) !== null && _a !== void 0 ? _a : '',
    apiPath: '',
    staticPath: '',
    db: {
        name: '',
        user: '',
        pw: '',
        account: '',
        uri: function (user, pw, name) {
            return "mongodb+srv://" + user + ":" + pw + "@mr-ds-20-ckbes.gcp.mongodb.net/" + name + "?retryWrites=true&w=majority";
        }
    },
    azureStorage: {
        STORAGE_ACCOUNT_ACCESS_KEY: (_b = process.env.STORAGE_ACCOUNT_ACCESS_KEY) !== null && _b !== void 0 ? _b : '',
        STORAGE_ACCOUNT_NAME: (_c = process.env.STORAGE_ACCOUNT_NAME) !== null && _c !== void 0 ? _c : ''
    }
};
