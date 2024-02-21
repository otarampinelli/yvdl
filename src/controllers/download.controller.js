import ytdl from "ytdl-core";

const download = async (req, res) => {
  try {
    const url = req.query.url;
    if (!ytdl.validateURL(url)) {
      throw new Error("Invalid URL");
    }
    res.header(`Access-Control-Allow-Origin`, `*`);
    res.header("Content-Disposition", 'attachment; filename="video.mp4"');
    res.status(200);
    ytdl(url, { format: "mp4" }).pipe(res);
  } catch (err) {
    console.error(err);
    res.status(400).send("Error downloading video", err);
  }
};

export default download;
