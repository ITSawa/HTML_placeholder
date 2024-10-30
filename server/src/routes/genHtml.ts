import { Router, Request, Response, NextFunction } from "express";
import parseTemplate from "../helpers/parser";

const router = Router();

router.get(
  "/create/:string_param/:json?",
  (req: Request, res: Response, next: NextFunction) => {
    const { string_param, json } = req.params;

    try {
      const html = parseTemplate(string_param);

      if (json === "true") {
        const cleared_html = html.replace(/[\n\t\r\f\v]/g, "");
        res.status(200).json({ html: cleared_html });
      } else {
        res.status(200).send(html);
      }
    } catch (error: any) {
      next(error);
    }
  }
);

console.log("Html generator route successfully loaded");
export default router;
