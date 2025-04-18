"use client";

import { useBungieProfile } from "@/data/useBungieProfile";
import { useBungieSession } from "@/data/useBungieSession";
import handleLogin from "@/lib/auth/handleLogin";

function SessionIndicator() {
  const validSession = useBungieSession();

  if (!validSession) {
    return <button onClick={handleLogin}>Login</button>;
  }

  return <SessionIndicatorStatus />;
}

function SessionIndicatorStatus() {
  const { profile, loading } = useBungieProfile();

  if (loading) {
    return <span>Loading...</span>;
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
