"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = void 0;
exports.ENV = {
    stage: process.env.NODE_ENV,
    port: 8082,
    domain: '',
    apiPath: '',
    staticPath: '',
    db: {
        name: '',
        user: '',
        pw: '',
        account: '@mr-ds-20-ckbes',
        uri: function (user, pw, name, account) {
            return "mongodb+srv://" + user + ":" + pw + account + ".gcp.mongodb.net/" + name + "?retryWrites=true&w=majority";
        }
    },
    azureStorage: {
        STORAGE_ACCOUNT_ACCESS_KEY: 'S2avke1TANr2EbkUYktO8XdlGMmspyL30h8HtufU+9npxvYpM2cIFDs70X9Z7/VWowjQ1F8u/0V3cSoSYWVAqA==',
        STORAGE_ACCOUNT_NAME: 'soundspacemedia'
    }
};
