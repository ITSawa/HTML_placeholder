import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import StatusError from "../helpers/statusError";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof StatusError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default errorHandler;
