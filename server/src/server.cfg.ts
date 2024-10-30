import path from "path";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, ".env"), override: true });

function getEnv(key: string) {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} not found`);
  }
  return value;
}

function isFileExists(filePath: string) {
  const req = fs.existsSync(filePath);

  if (!req) {
    throw new Error(`File ${filePath} not found`);
  }

  return filePath;
}

export const paths = {
  build_folder: isFileExists(path.resolve(__dirname, "../../client/dist")),
  index_file: isFileExists(
    path.resolve(__dirname, "../../client/dist/index.html")
  ),
};

export const server = {
  port: Number(getEnv("PORT")),
  host: getEnv("HOST"),
};

if (!server.port || !server.host) {
  throw new Error("Server config error");
}

console.log("Server config successfully loaded");
