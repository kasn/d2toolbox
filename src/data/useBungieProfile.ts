"use client";

import { useQuery } from "@tanstack/react-query";
import { getProfile } from "bungie-api-ts/destiny2";
import useBungieHttpClient from "./useBungieHttpClient";
import { type BungieMembershipType } from "bungie-api-ts/common";
import useToken from "./useToken";

export function useBungieProfile() {
  const { getValidToken } = useToken();
  const bungieHttpClient = useBungieHttpClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ["bungie-profile"],
    queryFn: async () => {
      const token = await getValidToken();

      const result = await getProfile(bungieHttpClient, {
        destinyMembershipId: token.destiny_membership_id!,
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
