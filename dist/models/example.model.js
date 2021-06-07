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
exports.ExampleModel = void 0;
var mongoose_1 = require("mongoose");
var mongoose = require("mongoose");
var base_model_1 = require("./base.model");
var ExampleSchema = new mongoose_1.Schema({
    title: { type: String },
    date_created: { type: Number },
    date_modified: { type: Number },
    order: { type: Number, default: 0 },
    hide: { type: Boolean, default: false }
});
var ExampleModel = /** @class */ (function (_super) {
    __extends(ExampleModel, _super);
    function ExampleModel() {
        return _super.call(this, mongoose.model('Example', ExampleSchema)) || this;
    }
    return ExampleModel;
}(base_model_1.BaseModel));
exports.ExampleModel = ExampleModel;
