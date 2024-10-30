import "./scss/index.scss";
import expand from "emmet";

export const parseTemplate = (template: string): string => {
  if (!template || typeof template !== "string") {
    return "Invalid emmet template string";
  }

  if (template.trim().length === 0 || template.length > 2000) {
    return "Invalid emmet template string length";
  }

  const parsed = expand(template, {
    type: "markup",
  });

  if (parsed) {
    return parsed;
  } else {
    return "Invalid emmet template string";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const testInput = document.getElementById("test-input") as HTMLInputElement;
  const testBtn = document.getElementById("test-btn") as HTMLButtonElement;
  const testOutput = document.getElementById(
    "test-output"
  ) as HTMLTextAreaElement;

  testBtn.addEventListener("click", () => {
    const result = parseTemplate(testInput.value);
    testOutput.value = result;
  });

  const copyBtn = document.getElementById("copy-btn") as HTMLButtonElement;
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(testOutput.value);
  });
});
