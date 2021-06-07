"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var env_1 = require("./environment/env");
var port = env_1.env().port;
var application_1 = require("./application");
var middleware_1 = require("./middleware");
var dbConString = env_1.env().db.uri(env_1.env().db.user, env_1.env().db.pw, env_1.env().db.name, env_1.env().db.account);
var storage_router_1 = require("./routes/storage.router");
/**
 * Configure App instance
 */
var app = new application_1.App(port, middleware_1.middleware, [
    storage_router_1.storageRouter
]);
/**
 * Set up database credentials
 */
// app.mongoDB(dbConString);
/**
 * Launch!
 */
app.listen();
