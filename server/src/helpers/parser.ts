import expand from "emmet";
import StatusError from "./statusError";

export const parseTemplate = (template: string): string => {
  if (!template || typeof template !== "string") {
    throw new StatusError("Invalid template string", 400);
  }

  if (template.trim().length === 0 || template.length > 2000) {
    throw new StatusError("Invalid template string length", 400);
  }

  const parsed = expand(template, {
    type: "markup",
  });

  if (parsed) {
    return parsed;
  } else {
    throw new StatusError("Invalid template string", 400);
  }
};

export default parseTemplate;
