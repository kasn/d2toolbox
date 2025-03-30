// lib/auth/getValidToken.ts
export async function getValidToken(): Promise<BungieToken> {
  const raw = localStorage.getItem("bungie_token");
  if (!raw) throw new Error("No token found");

  const token = JSON.parse(raw) as BungieToken;
  const expiresAt = token.received_at + token.expires_in * 1000;

  if (Date.now() < expiresAt - 60_000) {
    return token; // still valid
  }

  // expired → refresh it
  const res = await fetch("https://www.bungie.net/platform/app/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: token.refresh_token,
      client_id: process.env.NEXT_PUBLIC_BUNGIE_CLIENT_ID!,
    }),
  });

  const data = await res.json();

  if (!res.ok || !data.access_token) {
    localStorage.removeItem("bungie_token");
    throw new Error("Token refresh failed");
  }

  const updated: BungieToken = {
    ...token,
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    expires_in: data.expires_in,
    received_at: Date.now(),
  };

  localStorage.setItem("bungie_token", JSON.stringify(updated));

  return updated;
}
