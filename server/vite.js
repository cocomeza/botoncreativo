import fs from "fs";
import path from "path";
import express from "express";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function log(message) {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  console.log(`${formattedTime} [express] ${message}`);
}

export async function setupVite(app, server) {
  const vite = await (
    await import("vite")
  ).createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base: "/",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientDir = path.resolve(__dirname, "../client");
      let template = fs.readFileSync(
        path.resolve(clientDir, "index.html"),
        "utf-8",
      );
      template = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}

export function serveStatic(app) {
  const distPath = path.resolve(__dirname, "../dist");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}. Please build the project first.`,
    );
  }

  app.use(express.static(distPath));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}