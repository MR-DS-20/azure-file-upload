"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = exports.router = void 0;
var express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
var createBlobName_1 = require("./createBlobName");
var storage_blob_1 = require("@azure/storage-blob");
var env_1 = require("../../environment/env");
var ENV = env_1.env();
var COMPRESSED_CONTAINER = "compressed";
var ORIGINAL_CONTAINER = "original";
var STORAGE_ACCOUNT_NAME = (_a = ENV.azureStorage) === null || _a === void 0 ? void 0 : _a.STORAGE_ACCOUNT_NAME;
var STORAGE_ACCOUNT_ACCESS_KEY = (_b = ENV.azureStorage) === null || _b === void 0 ? void 0 : _b.STORAGE_ACCOUNT_ACCESS_KEY;
var sharedKeyCredential = new storage_blob_1.StorageSharedKeyCredential(STORAGE_ACCOUNT_NAME, STORAGE_ACCOUNT_ACCESS_KEY);
var ONE_MEGABYTE = 1024 * 1024;
var ONE_MINUTE = 60 * 1000;
// const inMemoryStorage = multer.memoryStorage();
// const uploadStrategy = multer({ storage: inMemoryStorage }).single("file");
var pipeline = storage_blob_1.newPipeline(sharedKeyCredential);
var blobServiceClient = new storage_blob_1.BlobServiceClient("https://" + STORAGE_ACCOUNT_NAME + ".blob.core.windows.net", pipeline);
function uploadFile(originaFileName, fileBuffer) {
    var blobName = createBlobName_1.createBlobName(originaFileName);
    var containerClient = blobServiceClient.getContainerClient(ORIGINAL_CONTAINER);
    var blockBlobClient = containerClient.getBlockBlobClient(blobName);
    return blockBlobClient.uploadData(fileBuffer);
}
exports.uploadFile = uploadFile;
