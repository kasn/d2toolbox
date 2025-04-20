"use client";

import { useQuery } from "@tanstack/react-query";
import { getProfile, type HttpClient } from "bungie-api-ts/destiny2";
import useBungieHttpClient from "../useBungieHttpClient";
import { type BungieMembershipType } from "bungie-api-ts/common";
import useToken from "../useToken";
import useLocalProfile from "../useLocalProfile";
import type { Dispatch, SetStateAction } from "react";

export const profileQuery = async (
  token: BungieToken,
  httpClient: HttpClient,
  setProfile: Dispatch<SetStateAction<LocalProfile>>,
) => {
  const result = await getProfile(httpClient, {
    destinyMembershipId: token.destiny_membership_id!,
    membershipType: token.membership_type as BungieMembershipType,
    components: [
      100, // DestinyComponentType.Profiles
      200, // DestinyComponentType.Characters
    ],
  });

  // that should not be here
  setProfile({
    displayCode:
      result.Response.profile.data?.userInfo?.bungieGlobalDisplayNameCode ??
      undefined,
    displayName:
      result.Response.profile.data?.userInfo?.bungieGlobalDisplayName ??
      undefined,
  });

  return result.Response;
};

export function useBungieProfile() {
  const { getValidToken } = useToken();
  const bungieHttpClient = useBungieHttpClient();
  const { setProfile } = useLocalProfile();

  const { data, error, isLoading } = useQuery({
    queryKey: ["bungie-profile"],
    queryFn: async () => {
      return profileQuery(await getValidToken(), bungieHttpClient, setProfile);
    },
    staleTime: Infinity,
  });

  return {
    profile: data,
    loading: isLoading,
    error,
  };
}
