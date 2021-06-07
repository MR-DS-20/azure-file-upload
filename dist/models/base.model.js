"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
/**
 * Provides common CRUD functionality to provided mongoose moodel.
 */
var BaseModel = /** @class */ (function () {
    function BaseModel(mongooseModel) {
        this.mongooseModel = mongooseModel;
        this.returnNew = { useFindAndModify: false, new: true };
    }
    BaseModel.prototype.create = function (document) {
        return this.mongooseModel.create(document);
    };
    BaseModel.prototype.find = function (populate) {
        return populate
            ? this.mongooseModel.find().populate(populate).exec()
            : this.mongooseModel.find().exec();
    };
    BaseModel.prototype.findById = function (id, populate) {
        return populate
            ? this.mongooseModel.findById(id).populate(populate).exec()
            : this.mongooseModel.findById(id).exec();
    };
    BaseModel.prototype.findOne = function (query, populate) {
        return populate
            ? this.mongooseModel.findOne(query).populate(populate).exec()
            : this.mongooseModel.findOne(query).exec();
    };
    BaseModel.prototype.findMany = function (query, populate) {
        return populate
            ? this.mongooseModel.find(query).populate(populate).exec()
            : this.mongooseModel.find(query).exec();
    };
    BaseModel.prototype.updateById = function (id, document, populate) {
        return populate
            ? this.mongooseModel
                .findByIdAndUpdate(id, document, this.returnNew)
                .populate(populate)
                .exec()
            : this.mongooseModel
                .findByIdAndUpdate(id, document, this.returnNew)
                .exec();
    };
    BaseModel.prototype.deleteById = function (id) {
        return this.mongooseModel.findByIdAndDelete(id).exec();
    };
    return BaseModel;
}());
exports.BaseModel = BaseModel;
