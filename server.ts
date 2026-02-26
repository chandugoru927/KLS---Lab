import express from "express";
import { createServer as createViteServer } from "vite";
import { initDb } from "./server/db.ts";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Initialize Database
  initDb();

  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", service: "KLS Backend" });
  });

  // Multi-tenant Auth Mock/Logic
  app.post("/api/auth/login", (req, res) => {
    // Placeholder for real auth
    res.json({ success: true, user: { role: 'student', name: 'Demo Student' } });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    app.use(express.static(path.resolve(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "dist/index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`KLS Server running on http://localhost:${PORT}`);
  });
}

startServer();
