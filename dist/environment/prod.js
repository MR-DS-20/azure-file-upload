"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = void 0;
exports.ENV = {
    stage: process.env.NODE_ENV,
    port: (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000,
    domain: (_b = process.env.DOMAIN) !== null && _b !== void 0 ? _b : '',
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
        STORAGE_ACCOUNT_ACCESS_KEY: (_c = process.env.STORAGE_ACCOUNT_ACCESS_KEY) !== null && _c !== void 0 ? _c : '',
        STORAGE_ACCOUNT_NAME: (_d = process.env.STORAGE_ACCOUNT_NAME) !== null && _d !== void 0 ? _d : ''
    }
};
