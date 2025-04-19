import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(new URL("/?error=missing_code", request.url));
  }

  const tokenRes = await fetch(
    "https://www.bungie.net/platform/app/oauth/token",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        client_id: process.env.NEXT_PUBLIC_BUNGIE_CLIENT_ID!,
        client_secret: process.env.BUNGIE_CLIENT_SECRET!,
      }),
    },
  );
  console.log("tokenRes", tokenRes);

  if (!tokenRes.ok) {
    console.error("Token exchange failed:", await tokenRes.text());
    return NextResponse.redirect(
      new URL("/?error=token_exchange_failed", request.url),
    );
  }

  const tokenData = await tokenRes.json();
  console.log("tokenData", tokenData);
  const redirectUrl = new URL("/login/capture", request.url);
  redirectUrl.hash = new URLSearchParams({
    access_token: tokenData.access_token,
    refresh_token: tokenData.refresh_token,
    expires_in: tokenData.expires_in.toString(),
    membership_id: tokenData.membership_id,
  }).toString();
  console.log(redirectUrl);
  return NextResponse.redirect(redirectUrl);
}
