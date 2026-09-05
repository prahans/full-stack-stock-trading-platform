import "dotenv/config";
import express, { type Express } from "express";
import cookieParser from "cookie-parser";

import authRouter from "./routes/authRoutes.ts";
import dashboardRouter from "./routes/dashboardRoutes.ts";
import connectDB from "./config/db.ts";
import { createCorsMiddleware } from "./config/cors.ts";

const app: Express = express();

app.use(cookieParser());
app.use(express.json());

app.use(createCorsMiddleware());

const PORT = process.env.PORT || 3000;

app.get("/api/health", (_req, res) => {
  res.status(200).json({ success: true, message: "API is running" });
});

app.use("/api/auth", authRouter);
app.use("/api/dashboard", dashboardRouter);

app.use(
  (
    error: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  },
);

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
