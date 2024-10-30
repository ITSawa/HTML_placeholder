import express, { Request, Response, NextFunction } from "express";
import { server } from "./server.cfg";
import logger from "./middlewares/logger";
import errorHandler from "./middlewares/errorHandler";
import htmlGenRouter from "./routes/genHtml";

const app = express();

app.use(logger);
app.use(htmlGenRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "API is working" });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: "Page not found" });
});

app.use(errorHandler);

app.listen(server.port, server.host, () => {
  console.log(`Server is running on http://${server.host}:${server.port}`);
});
