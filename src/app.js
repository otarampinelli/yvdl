import express from "express";
import downloadRoute from './routes/download.route.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200);
    res.end("Listening");
  });
  
app.use("/", downloadRoute);

export default app