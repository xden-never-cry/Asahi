import "server-only";
import fs from "fs";
import path from "path";
import { homedir } from "os";
import { promisify } from "util";

const readFileAsync = promisify(fs.readFile);

async function auth(token: string): Promise<boolean> {
  const tokenPath = path.join(homedir(), ".asahi", ".token");
  try {
    const tokenFile = await readFileAsync(tokenPath, "utf-8");
    return tokenFile === token;
  } catch (err) {
    console.error(err);
    return false;
  }
}