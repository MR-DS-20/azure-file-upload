"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
exports.env = function () {
    if (process.env.NODE_ENV === 'dev') {
        var env_1 = require('./dev');
        return env_1.ENV;
    }
    else {
        var env_2 = require('./prod');
        return env_2.ENV;
    }
};
