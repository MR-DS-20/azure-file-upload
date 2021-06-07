"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBlobName = void 0;
function createBlobName(orginal) {
    return Date.now() + "-" + orginal;
}
exports.createBlobName = createBlobName;
