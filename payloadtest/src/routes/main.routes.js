import { Router } from "express";
import payload from "payload";
import { Access } from "payload/config";

const postrouter = Router();
// ^ for getting all the videos
postrouter.get("/posts/videos/stream", async (req, res) => {
  try {
    const { limit = 10, page = 1 } = req.query;
    console.log("🚀 ~ file: main.routes.js:10 ~ postrouter.get ~ page:", page);
    console.log(
      "🚀 ~ file: main.routes.js:10 ~ postrouter.get ~ limit:",
      limit
    );

    const videoPosts = await payload.find({
      collection: "media",
      where: {
        type: { equals: "video" },
      },
      limit: limit,
      page: page,
    });

    res.json(videoPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ^ for getting all the shortvideos

postrouter.get("/posts/shortvideos/stream", async (req, res) => {
  try {
    const videoPosts = await payload.find({
      collection: "media",
      where: {
        type: { equals: "shortVideo" },
      },
    });

    res.json(videoPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ^ for getting all the image from media
postrouter.get("/posts/image/stream", async (req, res) => {
  try {
    const videoPosts = await payload.find({
      collection: "media",
      where: {
        type: { equals: "image" },
      },
    });

    res.json(videoPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
export default postrouter;
