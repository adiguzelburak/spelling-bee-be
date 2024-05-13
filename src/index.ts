import express from "express";
import { json } from "body-parser";
import { routers } from "./routes/routes";

const app = express();
app.use(json());
app.use(routers);

app.listen(3003, () => {
  console.log(`SERVER WORKS AT: ${3003}`);
});
