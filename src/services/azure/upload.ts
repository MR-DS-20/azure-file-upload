import express from "express";
export const router = express.Router();
import multer from "multer";
import { createBlobName } from "./createBlobName";
import {
  BlobServiceClient,
  StorageSharedKeyCredential,
  newPipeline,
  BlobUploadCommonResponse,
} from "@azure/storage-blob";
import { env, IEnv } from "../../environment/env";

const ENV = env();
const COMPRESSED_CONTAINER = "compressed";
const ORIGINAL_CONTAINER = "original";
const STORAGE_ACCOUNT_NAME: string = ENV.azureStorage
  ?.STORAGE_ACCOUNT_NAME as string;
const STORAGE_ACCOUNT_ACCESS_KEY: string = ENV.azureStorage
  ?.STORAGE_ACCOUNT_ACCESS_KEY as string;

const sharedKeyCredential = new StorageSharedKeyCredential(
  STORAGE_ACCOUNT_NAME,
  STORAGE_ACCOUNT_ACCESS_KEY
);
const ONE_MEGABYTE = 1024 * 1024;
const ONE_MINUTE = 60 * 1000;

// const inMemoryStorage = multer.memoryStorage();
// const uploadStrategy = multer({ storage: inMemoryStorage }).single("file");

const pipeline = newPipeline(sharedKeyCredential);
const blobServiceClient = new BlobServiceClient(
  `https://${STORAGE_ACCOUNT_NAME}.blob.core.windows.net`,
  pipeline
);

export function uploadFile(
  originaFileName: string,
  fileBuffer: Buffer,
): Promise<BlobUploadCommonResponse> {
  const blobName = createBlobName(originaFileName);

  const containerClient =
    blobServiceClient.getContainerClient(ORIGINAL_CONTAINER);

  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  return blockBlobClient.uploadData(fileBuffer);
}
