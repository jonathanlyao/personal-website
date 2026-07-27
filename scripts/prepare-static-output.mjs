import { copyFile, cp, mkdir, readdir, rm } from "node:fs/promises";
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

async function createRoutePayloadAliases(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const entryPath = resolve(directory, entry.name);

    if (entry.name.startsWith("__next.")) {
      try {
        await copyFile(
          resolve(entryPath, "__PAGE__.txt"),
          resolve(directory, `${entry.name}.__PAGE__.txt`),
        );
      } catch (error) {
        if (error?.code !== "ENOENT") {
          throw error;
        }
      }
      continue;
    }

    await createRoutePayloadAliases(entryPath);
  }
}

await createRoutePayloadAliases(clientDirectory);
await copyFile(
  resolve("hosting/server-entry.mjs"),
  resolve(serverDirectory, "index.js"),
);
await copyFile(
  resolve(".openai/hosting.json"),
  resolve(metadataDirectory, "hosting.json"),
);
