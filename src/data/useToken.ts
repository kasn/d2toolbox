import useLocalStorageState from "use-local-storage-state";

export default function useToken() {
  const [token, setToken, { removeItem }] = useLocalStorageState<BungieToken>(
    "bungie_token",
    undefined,
  );
  console.log("rerun yseToken");
  const getValidToken = async (): Promise<BungieToken> => {
    if (!token) throw new Error("No token found");
    console.log("in getValidToken", token);
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
      removeItem();
      throw new Error("Token refresh failed");
    }

    const updated: BungieToken = {
      ...token,
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      expires_in: data.expires_in,
      received_at: Date.now(),
    };

    setToken(updated);

    return updated;
  };

  return {
    token,
    getValidToken,
    setToken,
    removeItem,
  };
}
