"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getMembershipDataForCurrentUser } from "bungie-api-ts/user";
import useBungieHttpClient from "@/data/useBungieHttpClient";
import useToken from "@/data/useToken";
import useLocalProfile from "@/data/useLocalProfile";
import { profileQuery } from "@/data/bungie.net/useBungieProfile";

export default function CaptureAuth() {
  const router = useRouter();
  const { setToken, removeItem } = useToken();
  const bungieHttpClient = useBungieHttpClient();
  const { profile, setProfile } = useLocalProfile();

  useEffect(() => {
    const run = async () => {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);

      let token: BungieToken = {
        access_token: params.get("access_token")!,
        refresh_token: params.get("refresh_token")!,
        expires_in: parseInt(params.get("expires_in") || "0", 10),
        received_at: Date.now(),
        destiny_membership_id: params.get("membership_id") || "",
      };

      if (!token.access_token) {
        router.replace("/?error=missing_token");
        return;
      }
      // Store temporarily to use the httpClient
      setToken(token);

      try {
        const result = await getMembershipDataForCurrentUser(bungieHttpClient);
        const primary = result.Response.primaryMembershipId;
        const match =
          result.Response.destinyMemberships.find(
            (m) => m.membershipId === primary,
          ) || result.Response.destinyMemberships[0];

        token = {
          ...token,
          destiny_membership_id: match.membershipId,
          membership_type: match.membershipType,
        };

        setToken(token);
      } catch (err) {
        console.error("Failed to fetch Destiny membership info:", err);
        // Optional: clean up
        removeItem();
        router.replace("/?error=membership_lookup_failed");
        return;
      }

      await profileQuery(token, bungieHttpClient, setProfile);

      router.replace("/");
    };

    run();
  }, [router, bungieHttpClient, setToken, removeItem, setProfile]);

  return <p>Completing login…</p>;
}
