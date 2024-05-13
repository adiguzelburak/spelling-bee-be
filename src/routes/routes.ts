import express, { Request, Response } from "express";

const router = express.Router();

router.get("/en", (req: Request, res: Response) => {
  return res.send("english");
});

router.get("/tr", (req: Request, res: Response) => {
  return res.send("türkçe");
});

export { router as routers };
