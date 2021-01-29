import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import WebpackHotModule from "./WebpackHotModule";
import StaffRouter from "./staff/api/StaffRouter";
import StudentRouter from "./student/api/StudentRouter";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/staff", StaffRouter);
app.use("/student", StudentRouter);

const server = app.listen(PORT);

declare const module: WebpackHotModule;

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}
