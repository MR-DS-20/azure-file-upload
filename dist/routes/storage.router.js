"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageRouter = void 0;
//express imports
var express = require("express");
exports.storageRouter = express.Router();
//controllers
var upload_controller_1 = require("./../controllers/upload.controller");
//Routes
exports.storageRouter.post('/upload-file', function (req, res) { upload_controller_1.upload(req, res); });
exports.storageRouter.get('/list-files', function (req, res) { });
