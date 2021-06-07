"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleController = void 0;
var base_controller_1 = require("./base.controller");
var example_model_1 = require("../models/example.model");
var ExampleController = /** @class */ (function (_super) {
    __extends(ExampleController, _super);
    function ExampleController() {
        return _super.call(this, new example_model_1.ExampleModel()) || this;
    }
    ExampleController.prototype.exampleApiFunction = function (req, res) {
        this.create(res, req.body);
    };
    return ExampleController;
}(base_controller_1.BaseController));
exports.ExampleController = ExampleController;
