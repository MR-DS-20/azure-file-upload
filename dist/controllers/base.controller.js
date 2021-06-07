"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
var env_1 = require("../environment/env");
/**
 * Provides functions to be used with express routes. Serves common CRUD fuctionality.
 */
var BaseController = /** @class */ (function () {
    function BaseController(model) {
        this.useModReturnNew = { useFindAndModify: false, new: true };
        this.model = model;
    }
    /**
    * Sends the document as JSON in the body of response, and sets status to 200
    * @param doc the MongoDB document to be returned to the client as JSON
    * @param res the response object that will be used to send http response
    */
    BaseController.prototype.jsonRes = function (doc, res) {
        res.status(200).json(doc);
    };
    /**
     * @param err error object of any type genereated by the system
     * @param message custom response message to be provided to the client in a JSON body response ({error:'message'})
     * @param res response object to be used to to send
     * @param status custom status code, defaults to 500
     */
    BaseController.prototype.errRes = function (err, res, message, status) {
        if (message === void 0) { message = 'Sever Error'; }
        if (status === void 0) { status = 500; }
        if (env_1.env().stage === 'dev') {
            res.status(status).json({ error: message });
        }
        else {
            res.status(status).json({ error: message });
        }
    };
    /**
     * Creates a new document
     */
    BaseController.prototype.create = function (res, document, populate, errMsg) {
        var _this = this;
        if (errMsg === void 0) { errMsg = 'Failed to create'; }
        this.model.create(document).then(function (doc) {
            if (populate) {
                doc.populate(populate).execPopulate().then(function (populatedDoc) {
                    _this.jsonRes(populatedDoc, res);
                }).catch(function (err) { _this.errRes(err, res, errMsg); });
            }
            else {
                _this.jsonRes(doc, res);
            }
        }).catch(function (err) { _this.errRes(err, res, errMsg); });
    };
    /**
     * Returns all documents of model
     */
    BaseController.prototype.find = function (res, populate, errMsg) {
        var _this = this;
        if (errMsg === void 0) { errMsg = 'Failed to find documents'; }
        this.model.find(populate).then(function (doc) { _this.jsonRes(doc, res); }, function (err) { _this.errRes(err, res, errMsg); });
    };
    /**
     * Returns single doucument of model specified by _id.
     */
    BaseController.prototype.findById = function (res, documentId, populate, errMsg) {
        var _this = this;
        if (errMsg === void 0) { errMsg = "Failed to find document " + documentId; }
        this.model.findById(documentId, populate).then(function (doc) { _this.jsonRes(doc, res); }, function (err) { _this.errRes(err, res, errMsg); }).catch(function (err) { _this.errRes(err, res, 'Failed to retrieve doc'); });
    };
    /**
     * Returns single document from given model that matches the query.
     */
    BaseController.prototype.findOne = function (res, query, populate, errMsg) {
        var _this = this;
        if (errMsg === void 0) { errMsg = "Failed to find document " + query; }
        this.model.findOne(query, populate).then(function (doc) { _this.jsonRes(doc, res); }, function (err) { _this.errRes(err, res, errMsg); });
    };
    BaseController.prototype.findMany = function (res, query, populate, errMsg) {
        var _this = this;
        if (errMsg === void 0) { errMsg = "Failed to find document " + query; }
        this.model.findMany(query, populate).then(function (doc) { _this.jsonRes(doc, res); }, function (err) { _this.errRes(err, res, errMsg); });
    };
    /**
     * Updates single document,
     */
    BaseController.prototype.updateById = function (res, documentId, document, populate, errMsg) {
        var _this = this;
        if (errMsg === void 0) { errMsg = "Failed to update document " + documentId; }
        this.model.updateById(documentId, document, populate).then(function (doc) { _this.jsonRes(doc, res); }, function (err) { _this.errRes(err, res, errMsg); });
    };
    /**
     * Deletes a single document selected by id
     */
    BaseController.prototype.deleteById = function (res, documentId, errMsg) {
        var _this = this;
        if (errMsg === void 0) { errMsg = "Failed to delete document " + documentId; }
        this.model.deleteById(documentId).then(function (doc) { _this.jsonRes(doc, res); }, function (err) { _this.errRes(err, res, errMsg); });
    };
    return BaseController;
}());
exports.BaseController = BaseController;
