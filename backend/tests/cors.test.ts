import assert from "node:assert/strict";
import { once } from "node:events";
import { type AddressInfo } from "node:net";
import { test } from "node:test";
import express from "express";

import {
  createCorsMiddleware,
  readAllowedOrigins,
} from "../src/config/cors.ts";

const frontendOrigin = "https://full-stack-stock-trading-platform-f.vercel.app";
const dashboardOrigin = "https://full-stack-stock-trading-platform-five.vercel.app";
const productionEnv = {
  NODE_ENV: "production",
  FRONTEND_URL: frontendOrigin,
  DASHBOARD_URL: dashboardOrigin,
};

test("production requires both app origin variables", () => {
  for (const name of ["FRONTEND_URL", "DASHBOARD_URL"]) {
    for (const missing of [undefined, "", "  ", " , "]) {
      assert.throws(
        () => readAllowedOrigins({ ...productionEnv, [name]: missing }),
        new RegExp(`Set ${name}`),
      );
    }
  }
});

test("development retains the two localhost defaults", () => {
  assert.deepEqual(readAllowedOrigins({ NODE_ENV: "development" }), [
    "http://localhost:5173",
    "http://localhost:5174",
  ]);
});

test("origins support legacy comma-separated values, trailing slashes and duplicates", () => {
  assert.deepEqual(
    readAllowedOrigins({
      ...productionEnv,
      FRONTEND_URL: ` ${frontendOrigin}/, ${dashboardOrigin}///, `,
      DASHBOARD_URL: `${dashboardOrigin}/`,
    }),
    [frontendOrigin, dashboardOrigin],
  );
});

test("rejects URLs that are not complete HTTP(S) origins", () => {
  const invalidOrigins = [
    "example.com",
    "https:example.com",
    "ftp://example.com",
    "https://example.com/login",
    "https://example.com/login/..",
    "https://example.com?next=/login",
    "https://example.com/#fragment",
    "https://user:password@example.com",
    "https://exa\nmple.com",
    "https://*.vercel.app",
    "*",
    "null",
  ];

  for (const origin of invalidOrigins) {
    assert.throws(
      () => readAllowedOrigins({ ...productionEnv, FRONTEND_URL: origin }),
      /FRONTEND_URL must contain complete/,
    );
  }
});

test("HTTP preflights and requests enforce the same credentialed origin allowlist", async (t) => {
  const app = express();
  let loginCalls = 0;

  app.use(createCorsMiddleware(productionEnv));
  app.get("/api/health", (_req, res) => res.json({ success: true }));
  app.post("/api/auth/login", (_req, res) => {
    loginCalls += 1;
    res.json({ success: true });
  });

  const server = app.listen(0, "127.0.0.1");
  t.after(async () => {
    await new Promise<void>((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
      server.closeAllConnections();
    });
  });
  await once(server, "listening");
  const { port } = server.address() as AddressInfo;
  const baseUrl = `http://127.0.0.1:${port}`;

  for (const origin of [frontendOrigin, dashboardOrigin]) {
    const preflight = await fetch(`${baseUrl}/api/auth/login`, {
      method: "OPTIONS",
      headers: {
        Origin: origin,
        "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": "content-type",
      },
    });
    assert.equal(preflight.status, 204);
    assert.equal(preflight.headers.get("access-control-allow-origin"), origin);
    assert.equal(preflight.headers.get("access-control-allow-credentials"), "true");
    assert.match(preflight.headers.get("access-control-allow-methods") || "", /POST/);
    assert.equal(preflight.headers.get("access-control-allow-headers"), "content-type");

    const response = await fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      headers: { Origin: origin },
    });
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("access-control-allow-origin"), origin);
    assert.equal(response.headers.get("access-control-allow-credentials"), "true");
  }

  const callsBeforeRejectedRequests = loginCalls;
  for (const origin of ["https://untrusted.example", "null", `${frontendOrigin}.evil.example`]) {
    for (const method of ["OPTIONS", "POST"]) {
      const response = await fetch(`${baseUrl}/api/auth/login`, {
        method,
        headers: {
          Origin: origin,
          ...(method === "OPTIONS" ? { "Access-Control-Request-Method": "POST" } : {}),
        },
      });
      assert.equal(response.status, 403);
      assert.equal(response.headers.get("access-control-allow-origin"), null);
      assert.deepEqual(await response.json(), {
        success: false,
        message: "Origin is not allowed by CORS",
      });
    }
  }
  assert.equal(loginCalls, callsBeforeRejectedRequests);

  const health = await fetch(`${baseUrl}/api/health`);
  assert.equal(health.status, 200);
  assert.equal(health.headers.get("access-control-allow-origin"), null);
});
