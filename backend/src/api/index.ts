import express, { Request, Response } from "express";

import { prisma } from "../app";

const router = express.Router();

router.get("/", async (_: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json({
    message: "well, wellcome to the backed api",
    users: users,
  });
});

export default router;
