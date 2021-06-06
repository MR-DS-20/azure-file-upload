const stage = process.env.NODE_ENV
if (stage !== "production") {
  require("dotenv").config();
}
import {
  BlobServiceClient,
  StorageSharedKeyCredential,
  newPipeline,
} from "@azure/storage-blob";

import express from "express";
export const router = express.Router();
const compressed_container = "compressed";
const original_container = "original";
import multer from "multer";
const inMemoryStorage = multer.memoryStorage();
const uploadStrategy = multer({ storage: inMemoryStorage }).single("audio");
import getStream from "into-stream";
import { createBlobName } from "./createBlobName";
const containerName2 = "images";
const ONE_MEGABYTE = 1024 * 1024;
const uploadOptions = { bufferSize: 4 * ONE_MEGABYTE, maxBuffers: 20 };
const ONE_MINUTE = 60 * 1000;

const STORAGE_ACCOUNT_NAME: string = process.env.STORAGE_ACCOUNT_NAME as string;
const STORAGE_ACCOUNT_ACCESS_KEY: string = process.env
  .AZURE_STORAGE_ACCOUNT_ACCESS_KEY as string;

const sharedKeyCredential = new StorageSharedKeyCredential(
  STORAGE_ACCOUNT_NAME,
  STORAGE_ACCOUNT_ACCESS_KEY
);

const pipeline = newPipeline(sharedKeyCredential);

const blobServiceClient = new BlobServiceClient(
  `https://${STORAGE_ACCOUNT_NAME}.blob.core.windows.net`,
  pipeline
);

router.post("/", uploadStrategy, async (req, res) => {
  const blobName = createBlobName(req.file.originalname);
  const stream = getStream(req.file.buffer);
  const containerClient =
    blobServiceClient.getContainerClient(original_container);
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  try {
    await blockBlobClient.uploadStream(
      stream,
      uploadOptions.bufferSize,
      uploadOptions.maxBuffers,
      {
        blobHTTPHeaders: {
          blobContentType: req.file.mimetype,
        },
      }
    );
    res.status(200).send({ mesage: "Success" });
  } catch (error) {
      console.log(error)
    if(stage !== 'production'){
        res.status(500).send(error)
    }else {
        res.status(500).send({error: "Server error uploading, sorry...."})
    }
  }
});
