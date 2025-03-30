export function useBungieSession(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  const raw = localStorage.getItem("bungie_token");

  if (!raw) {
    return false;
  }

  try {
    const token = JSON.parse(raw) as BungieToken;
    return true;
  } catch {
    return false;
  }
}
