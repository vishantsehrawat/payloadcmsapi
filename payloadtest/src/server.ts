import express from "express";
import payload from "payload";
import postrouter from "./routes/main.routes";
import cors from "cors";

require("dotenv").config();
const app = express();
app.use(cors());
// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});
app.use("/api", postrouter);
const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
  });
};

start();
