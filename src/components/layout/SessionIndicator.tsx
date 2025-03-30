"use client";

import { useBungieProfile } from "@/data/useBungieProfile";
import { useBungieSession } from "@/data/useBungieSession";
import handleLogin from "@/lib/auth/handleLogin";
import Link from "next/link";

function SessionIndicator() {
  const validSession = useBungieSession();

  if (!validSession) {
    return (
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <SessionIndicatorStatus />
    </div>
  );
}

function SessionIndicatorStatus() {
  const { profile, loading } = useBungieProfile();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return (
      <div>
        <button onClick={handleLogin}>Login</button>
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
