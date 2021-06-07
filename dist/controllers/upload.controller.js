"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
var upload_1 = require("../services/azure/upload");
function onError(error, res) {
    console.log(error);
    if (process.env.NODE_ENV !== "production") {
        res.status(500).send(error);
    }
    else {
        res.status(500).send({ error: "Server error uploading, sorry...." });
    }
}
function upload(req, res) {
    try {
        upload_1.uploadFile(req.file.originalname, req.file.buffer)
            .then(function () {
            res.status(200).send({ mesage: "Success" });
        })
            .catch(function (error) { onError(error, res); });
    }
    catch (e) {
        onError(e, res);
    }
}
exports.upload = upload;
