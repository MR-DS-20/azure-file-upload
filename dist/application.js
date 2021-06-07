"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var env_1 = require("./environment/env");
var express = require("express");
var mongoose = require("mongoose");
var App = /** @class */ (function () {
    function App(port, middleware, routes) {
        this.staticPath = 'public';
        /**
         * Base path for all routes routes. Defaults to '/api'. set process.env.API_PATH to change
         */
        this.apiPath = '/api';
        this.app = express();
        this.port = port;
        this.middleware(middleware);
        this.routes(routes);
        this.assets();
        if (process.env.API_PATH) {
            this.apiPath = process.env.API_PATH;
        }
        if (env_1.env().staticPath) {
            this.staticPath = env_1.env().staticPath;
        }
    }
    /**
     * @param mware Array of middlewares to be loaded into express app
     */
    App.prototype.middleware = function (mware) {
        var _this = this;
        mware.forEach(function (m) {
            _this.app.use(m);
        });
    };
    App.prototype.addMiddleWare = function (middleWare) {
        this.app.use(middleWare);
    };
    /**
     * Attaches route objects to app, appending routes to `apiPath`
     * @param routes Array of router objects to be attached to the app
     */
    App.prototype.routes = function (routes) {
        var _this = this;
        routes.forEach(function (r) {
            _this.app.use("" + _this.apiPath, r);
        });
    };
    App.prototype.assets = function () {
        this.app.use(express.static(this.staticPath));
    };
    App.prototype.mongoDB = function (uri) {
        var connect = function () {
            mongoose
                .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
                .then(function () {
                return;
            })
                .catch(function (error) {
                console.log('DATABASE CONNECTION FAILED \n', error);
                return process.exit(1);
            });
        };
        connect();
        mongoose.connection.on("disconnected", connect);
    };
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('APP LISTENING ON PORT:', _this.port);
        });
    };
    return App;
}());
exports.App = App;
