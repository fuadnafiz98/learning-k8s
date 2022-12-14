import express from "express";
import cors from "cors";
import { errors } from "celebrate";
import { PrismaClient } from "@prisma/client";

import errorHandler from "./middlewares/errorHandler";
import notFound from "./middlewares/notFound";

import api from "./api";

export const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    message: "welcome to the backed!!",
  });
});

app.use("/api", api);

app.use(notFound);
app.use(errorHandler);
app.use(errors());

export default app;
