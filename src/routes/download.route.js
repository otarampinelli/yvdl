import express from "express";
import download from '../controllers/download.controller.js'

const downlaodRoute = express.Router();

downlaodRoute.get("/download", download);

export default downlaodRoute;
