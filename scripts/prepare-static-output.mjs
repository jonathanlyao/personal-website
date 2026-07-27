import { cp, rm } from "node:fs/promises";
import { resolve } from "node:path";

const exportDirectory = resolve("out");
const sitesDirectory = resolve("dist");

await rm(sitesDirectory, { recursive: true, force: true });
await cp(exportDirectory, sitesDirectory, { recursive: true });
