import { copyFile, cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const exportDirectory = resolve("out");
const sitesDirectory = resolve("dist");
const clientDirectory = resolve(sitesDirectory, "client");
const serverDirectory = resolve(sitesDirectory, "server");
const metadataDirectory = resolve(sitesDirectory, ".openai");

await rm(sitesDirectory, { recursive: true, force: true });
await mkdir(serverDirectory, { recursive: true });
await mkdir(metadataDirectory, { recursive: true });
await cp(exportDirectory, clientDirectory, { recursive: true });
await copyFile(
  resolve("hosting/server-entry.mjs"),
  resolve(serverDirectory, "index.js"),
);
await copyFile(
  resolve(".openai/hosting.json"),
  resolve(metadataDirectory, "hosting.json"),
);
