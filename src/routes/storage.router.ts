//express imports
import express = require('express');
import { uploadFile } from '../services/azure/upload';
export const storageRouter = express.Router();

//controllers
import { upload } from "./../controllers/upload.controller";

//Routes
storageRouter.post('/upload-file', (req, res) => { upload(req,res)})
storageRouter.get('/list-files', (req, res) => { })

