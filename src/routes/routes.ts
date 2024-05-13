import express, { Request, Response } from "express";
import tr from "../data/tr";
import en from "../data/en";

const router = express.Router();

router.get("/en", (req: Request, res: Response) => {
  return res.send(en);
});

router.get("/tr", (req: Request, res: Response) => {
  return res.send(tr);
});

export { router as routers };
