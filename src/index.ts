import express from "express";
import { json } from "body-parser";
import { routers } from "./routes/routes";
import { config } from "../config";
import rateLimit from "express-rate-limit";

import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 3003;

const app = express();
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again after 15 minutes",
});
app.use(json());
app.use(limiter);
app.use(routers);

app.listen(PORT, () => {
  console.log(`SERVER WORKS AT: ${config.server.port}`);
});
