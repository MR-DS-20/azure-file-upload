"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerTemplate = void 0;
//express imports
var express = require("express");
exports.routerTemplate = express.Router();
//controllers
var controllers_module_1 = require("./../controllers/controllers.module");
//Routes
exports.routerTemplate.post('/content', function (req, res) { controllers_module_1.exampleController.exampleApiFunction(req, res); });
exports.routerTemplate.put('/content/:id', function (req, res) { });
exports.routerTemplate.delete('/content/:id', function (req, res) { });
exports.routerTemplate.get('/content/:id', function (req, res) { });
