"use client";

import useLocalStorageState from "use-local-storage-state";

export function useBungieSession(): boolean {
  const [token] = useLocalStorageState<BungieToken>("bungie_token", {
    defaultValue: undefined,
  });

  return token !== undefined;
}
