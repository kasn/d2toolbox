// hooks/useBungieProfile.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { getProfile } from "bungie-api-ts/destiny2";
import { bungieHttpClient } from "@/lib/bungieHttpClient";
import { type BungieMembershipType } from "bungie-api-ts/common";

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
    components: [
      100, // DestinyComponentType.Profiles
      200, // DestinyComponentType.Characters
    ],
  }).then((res) => res.Response);
};

export function useBungieProfile() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["bungie-profile"],
    queryFn: fetchProfile,
    retry: false,
  });

  return {
    profile: data,
    loading: isLoading,
    error,
  };
}
