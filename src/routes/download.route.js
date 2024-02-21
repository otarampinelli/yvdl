import express from "express";
import download from '../controllers/download.controller.js'

const downloadRout = express.Router();

downloadRout.get("/download", download);

export default downloadRout;
