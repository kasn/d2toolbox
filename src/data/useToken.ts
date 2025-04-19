import useLocalStorageState from "use-local-storage-state";

const getTokenFromLocalStorage = (): BungieToken | undefined => {
  const raw = localStorage.getItem("bungie_token");
  if (!raw) {
    return undefined;
  }

  return JSON.parse(raw) as BungieToken;
};

export default function useToken() {
  const [token, setToken, { removeItem }] = useLocalStorageState<BungieToken>(
    "bungie_token",
    undefined,
  );

  const getValidToken = async (): Promise<BungieToken> => {
    // we might have a race condition here, so try to see if we have a token in local storage
    // in a perfect world, `useLocalStorageState` would also offer a callable method that gets in
    // from local storage directly and not just from the state
    // but this is a workaround for now
    let localtoken: BungieToken | null = null;
    if (token) {
      localtoken = token;
    } else {
      const localStorageToken = getTokenFromLocalStorage();
      if (!localStorageToken) {
        throw new Error("No token found");
      }
      localtoken = localStorageToken;
    }

    const expiresAt = localtoken.received_at + localtoken.expires_in * 1000;

    if (Date.now() < expiresAt - 60_000) {
      return localtoken; // still valid
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
