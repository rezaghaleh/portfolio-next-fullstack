import crypto from "node:crypto";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function normalizeNickname(value: string) {
  return value.trim().replace(/\s+/g, " ").slice(0, 24);
}

export function hashIp(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

export function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  return forwardedFor?.split(",")[0]?.trim() || realIp || "local-dev";
}
