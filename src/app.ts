import express from "express";
import { json } from "body-parser";
import { testController } from "./controllers/test-controller";

const app = express();
app.use(json());

app.use(testController);

export { app };