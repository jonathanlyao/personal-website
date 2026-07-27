import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve } from "node:path";

const outputDirectory = resolve("dist/client");
const portIndex = process.argv.indexOf("--port");
const hostIndex = process.argv.indexOf("--hostname");
const port = Number(process.env.PORT ?? process.argv[portIndex + 1] ?? 3000);
const hostname = process.argv[hostIndex + 1] ?? "127.0.0.1";

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2",
};

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(
      new URL(request.url ?? "/", `http://${hostname}`).pathname,
    );
    let filePath = resolve(outputDirectory, `.${pathname}`);

    if (!filePath.startsWith(outputDirectory)) {
      response.writeHead(403).end("Forbidden");
      return;
    }

    if ((await stat(filePath)).isDirectory()) {
      filePath = resolve(filePath, "index.html");
    }

    const body = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type":
        contentTypes[extname(filePath)] ?? "application/octet-stream",
    });
    response.end(request.method === "HEAD" ? undefined : body);
  } catch {
    try {
      const pathname = decodeURIComponent(
        new URL(request.url ?? "/", `http://${hostname}`).pathname,
      );
      const isExtensionless = !pathname.split("/").at(-1)?.includes(".");

      if (isExtensionless) {
        const htmlPath = resolve(
          outputDirectory,
          `.${pathname.replace(/\/$/, "") || "/index"}.html`,
        );

        if (htmlPath.startsWith(outputDirectory)) {
          const body = await readFile(htmlPath);
          response.writeHead(200, {
            "Content-Type": contentTypes[".html"],
          });
          response.end(request.method === "HEAD" ? undefined : body);
          return;
        }
      }
    } catch {
      // Fall through to the exported 404 page.
    }

    const body = await readFile(resolve(outputDirectory, "404.html"));
    response.writeHead(404, { "Content-Type": contentTypes[".html"] });
    response.end(request.method === "HEAD" ? undefined : body);
  }
}).listen(port, hostname, () => {
  console.log(`Static site ready at http://${hostname}:${port}`);
});
