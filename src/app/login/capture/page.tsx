"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getMembershipDataForCurrentUser } from "bungie-api-ts/user";
import { bungieHttpClient } from "@/lib/bungieHttpClient";

export default function CaptureAuth() {
  const router = useRouter();

  useEffect(() => {
    const run = async () => {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);

      const token = {
        access_token: params.get("access_token"),
        refresh_token: params.get("refresh_token"),
        expires_in: parseInt(params.get("expires_in") || "0", 10),
        received_at: Date.now(),
      };

      if (!token.access_token) {
        router.replace("/?error=missing_token");
        return;
      }

      // Store temporarily to use the httpClient
      localStorage.setItem("bungie_token", JSON.stringify(token));

      try {
        const result = await getMembershipDataForCurrentUser(bungieHttpClient);
        const primary = result.Response.primaryMembershipId;
        const match =
          result.Response.destinyMemberships.find(
            (m) => m.membershipId === primary,
          ) || result.Response.destinyMemberships[0];

        localStorage.setItem(
          "bungie_token",
          JSON.stringify({
            ...token,
            destiny_membership_id: match.membershipId,
            membership_type: match.membershipType,
          }),
        );
      } catch (err) {
        console.error("Failed to fetch Destiny membership info:", err);
        // Optional: clean up
        localStorage.removeItem("bungie_token");
        router.replace("/?error=membership_lookup_failed");
        return;
      }

      router.replace("/");
    };

    run();
  }, [router]);

  return <p>Completing login…</p>;
}
