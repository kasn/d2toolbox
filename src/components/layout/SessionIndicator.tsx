"use client";

import { useBungieProfile } from "@/data/useBungieProfile";
import Link from "next/link";

function SessionIndicator() {
  const { profile, loading, error } = useBungieProfile();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return (
      <div>
        <Link href={"/login"}>Login</Link>
      </div>
    );
  }

  return (
    <div>
      Hi,{" "}
      <strong>
        {profile.profile.data?.userInfo.bungieGlobalDisplayName}#
        {profile.profile.data?.userInfo.bungieGlobalDisplayNameCode}
      </strong>
    </div>
  );
}
export default SessionIndicator;
