import { Response, Request } from "express";
import mongoose = require("mongoose");
import { env } from "../environment/env";
import { uploadFile } from "../services/azure/upload";
import fs from 'fs'
function onError(error: any, res: Response) {
  console.log(error);
  if (process.env.NODE_ENV !== "production") {
    res.status(500).send(error);
  } else {
    res.status(500).send({ error: "Server error uploading, sorry...." });
  }
}

export function upload(req: Request, res: Response): void {
  try {

    uploadFile(req.file.originalname, req.file.buffer)
    .then(() => {
      res.status(200).send({ mesage: "Success" });
    })
    .catch((error) => { onError(error, res)});
  } catch (e) {
    onError(e, res);
  }
}
