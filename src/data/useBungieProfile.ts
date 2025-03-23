// hooks/useBungieProfile.ts
"use client";

import useSWR from "swr";
import { getProfile } from "bungie-api-ts/destiny2";
import { bungieHttpClient } from "@/lib/bungieHttpClient";
import { BungieMembershipType } from "bungie-api-ts/common";
import { use } from "react";

const fetchProfile = async () => {
  const tokenRaw = localStorage.getItem("bungie_token");
  if (!tokenRaw) throw new Error("Not authenticated");

  const { destiny_membership_id, membership_type } = JSON.parse(tokenRaw);

  if (!destiny_membership_id || membership_type === undefined) {
    throw new Error("Missing Destiny profile info");
  }

  return getProfile(bungieHttpClient, {
    destinyMembershipId: destiny_membership_id,
    membershipType: membership_type as BungieMembershipType,
    components: [100],
  }).then((res) => res.Response);
};

export function useBungieProfile() {
  console.log("useBungieProfile");

  const { data, error, isLoading, mutate } = useSWR(
    "bungie-profile",
    fetchProfile,
  );

  return {
    profile: data,
    loading: isLoading,
    error,
    refresh: mutate,
  };
}
