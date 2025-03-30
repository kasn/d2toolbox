"use client";

import { useQuery } from "@tanstack/react-query";
import { getProfile } from "bungie-api-ts/destiny2";
import { bungieHttpClient } from "@/lib/bungieHttpClient";
import { type BungieMembershipType } from "bungie-api-ts/common";
import { getValidToken } from "@/lib/auth/getValidToken";

export function useBungieProfile() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["bungie-profile"],
    queryFn: async () => {
      const token = await getValidToken();

      const result = await getProfile(bungieHttpClient, {
        destinyMembershipId: token.destiny_membership_id,
        membershipType: token.membership_type as BungieMembershipType,
        components: [
          100, // DestinyComponentType.Profiles
          200, // DestinyComponentType.Characters
        ],
      });

      return result.Response;
    },
  });

  return {
    profile: data,
    loading: isLoading,
    error,
  };
}
