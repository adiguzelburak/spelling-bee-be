import express from "express";
import { json } from "body-parser";
import { routers } from "./routes/routes";
import { config } from "../config";

const app = express();
app.use(json());
app.use(routers);

app.listen(config.server.port, () => {
  console.log(`SERVER WORKS AT: ${config.server.port}`);
});
