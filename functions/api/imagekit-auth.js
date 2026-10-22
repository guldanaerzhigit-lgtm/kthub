// Cloudflare Pages Function: create short-lived ImageKit upload credentials.
// Configure IMAGEKIT_PUBLIC_KEY and IMAGEKIT_PRIVATE_KEY as server-side secrets.
export async function onRequestPost({ request, env }) {
  const origin = request.headers.get("Origin");
  const allowedOrigin = env.APP_ORIGIN;
  if (allowedOrigin && origin !== allowedOrigin) {
    return new Response("Forbidden", { status: 403 });
  }
  if (!env.IMAGEKIT_PUBLIC_KEY || !env.IMAGEKIT_PRIVATE_KEY) {
    return Response.json({ error: "ImageKit server secrets are not configured." }, { status: 503 });
  }

  const now = Math.floor(Date.now() / 1000);
  const expire = now + 5 * 60;
  const token = crypto.randomUUID();
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(env.IMAGEKIT_PRIVATE_KEY),
    { name: "HMAC", hash: "SHA-1" },
    false,
    ["sign"]
  );
  const signatureBytes = await crypto.subtle.sign("HMAC", key, encoder.encode(token + expire));
  const signature = [...new Uint8Array(signatureBytes)]
    .map(byte => byte.toString(16).padStart(2, "0"))
    .join("");

  return Response.json(
    { publicKey: env.IMAGEKIT_PUBLIC_KEY, token, expire, signature },
    { headers: { "Cache-Control": "no-store" } }
  );
}

export async function onRequestOptions({ request, env }) {
  const origin = request.headers.get("Origin");
  if (env.APP_ORIGIN && origin !== env.APP_ORIGIN) return new Response(null, { status: 403 });
  return new Response(null, { status: 204, headers: { "Allow": "POST, OPTIONS" } });
}
