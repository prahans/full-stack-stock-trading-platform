import cors from "cors";
import { type RequestHandler } from "express";

interface CorsEnvironment {
  NODE_ENV?: string;
  FRONTEND_URL?: string;
  DASHBOARD_URL?: string;
}

const developmentOrigins = {
  FRONTEND_URL: "http://localhost:5173",
  DASHBOARD_URL: "http://localhost:5174",
};

export const readAllowedOrigins = (
  env: CorsEnvironment = process.env,
): string[] => {
  const origins = Object.entries(developmentOrigins).flatMap(
    ([name, fallback]) => {
      const variable = name as keyof typeof developmentOrigins;
      const configuredOrigins = (env[variable] || "")
        .split(",")
        .map((origin) => origin.trim().replace(/\/+$/, ""))
        .filter(Boolean);

      if (!configuredOrigins.length) {
        if (env.NODE_ENV === "production") {
          throw new Error(
            `Set ${variable} to your deployed app origin in the backend environment before starting.`,
          );
        }

        return [fallback];
      }

      return configuredOrigins.map((origin) => {
        try {
          const url = new URL(origin);

          if (
            !/^https?:\/\/[^\s/?#\\]+$/i.test(origin) ||
            url.username ||
            url.password ||
            url.hostname.includes("*")
          ) {
            throw new Error("Invalid origin");
          }

          return url.origin;
        } catch {
          throw new Error(
            `${variable} must contain complete http:// or https:// origins without paths, credentials, queries, fragments, or wildcards. Separate multiple origins with commas.`,
          );
        }
      });
    },
  );

  return [...new Set(origins)];
};

export const createCorsMiddleware = (
  env: CorsEnvironment = process.env,
): RequestHandler => {
  const allowedOrigins = readAllowedOrigins(env);
  const handleCors = cors({ origin: allowedOrigins, credentials: true });

  return (req, res, next) => {
    const origin = req.get("Origin");
    res.vary("Origin");

    // Reject the request itself as well as the preflight before routes can run.
    if (origin !== undefined && !allowedOrigins.includes(origin)) {
      res.status(403).json({
        success: false,
        message: "Origin is not allowed by CORS",
      });
      return;
    }

    handleCors(req, res, next);
  };
};
