"use client";

import { useBungieProfile } from "@/data/useBungieProfile";

const handleLogin = () => {
  const params = new URLSearchParams({
    client_id: process.env.NEXT_PUBLIC_BUNGIE_CLIENT_ID!,
    response_type: "code",
    redirect_uri: process.env.NEXT_PUBLIC_BUNGIE_REDIRECT_URI!,
  });
  window.location.href = `https://www.bungie.net/en/OAuth/Authorize?${params}`;
};

export default function LoginPage() {
  const { profile, loading, error } = useBungieProfile();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!profile) {
    return (
      <button
        className="ml-2 cursor-pointer items-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 shadow-2xl ring-1 ring-inset ring-gray-500/10 hover:bg-gray-200 dark:bg-gray-400/10 dark:text-white dark:ring-gray-400/20 dark:hover:bg-gray-400"
        onClick={handleLogin}
      >
        Login with Bungie
      </button>
    );
  }

  return (
    <div>
      <h1>Welcome, Guardian</h1>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );

  return;
}
