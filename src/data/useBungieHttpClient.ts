import type { HttpClient, HttpClientConfig } from "bungie-api-ts/http";
import useToken from "./useToken";

function useBungieHttpClient(): HttpClient {
  const { getValidToken } = useToken();

  const bungieHttpClient: HttpClient = async (config: HttpClientConfig) => {
    const token = await getValidToken();
    let url = new URL(config.url);
    if (config.params) {
      const searchParams = new URLSearchParams();
      for (const key in config.params) {
        const value = config.params[key];
        // This allows empty strings, zeros, etc., but skips undefined/null
        if (value !== undefined && value !== null) {
          searchParams.append(key, String(value));
        } else if (value === "") {
          searchParams.append(key, ""); // allow explicitly empty
        }
      }
      url.search = searchParams.toString();
    }

    const res = await fetch(url.toString(), {
      method: config.method,
      headers: {
        Authorization: `Bearer ${token.access_token}`,
        "X-API-Key": process.env.NEXT_PUBLIC_BUNGIE_API_KEY!,
      },
      body: config.body,
    });

    const data = await res.json();

    if (data.ErrorCode !== 1) {
      throw new Error(data.Message || "Bungie API error");
    }

    return data;
  };

  return bungieHttpClient;
}

export default useBungieHttpClient;
