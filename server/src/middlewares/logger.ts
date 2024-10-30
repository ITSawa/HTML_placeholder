import { Request, Response, NextFunction } from "express";

const logger = (req: Request, res: Response, next: NextFunction) => {
  const methodColor = "\x1b[34m"; // Orange
  const urlColor = "\x1b[30m"; // Yellow
  const resetColor = "\x1b[0m"; // Reset

  console.log(
    `${methodColor}${req.method}${resetColor} ${urlColor}${req.url}${resetColor}`
  );
  next();
};

const clearConsole = () => {
  console.clear();
  console.log("Console cleared");
};

const consoleIntervalClearing = 30 * 60 * 1000; // 30 minutes clearing console

setInterval(clearConsole, consoleIntervalClearing);

console.log("Logger successfully loaded");
export default logger;
