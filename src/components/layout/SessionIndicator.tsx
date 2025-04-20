"use client";

import useLocalProfile from "@/data/useLocalProfile";
import handleLogin from "@/lib/auth/handleLogin";

const Hi = ({ profile }: { profile: LocalProfile }) => {
  return (
    <div>
      Hi,{" "}
      <strong>
        {profile.displayName}#{profile.displayCode}
      </strong>
    </div>
  );
};

function SessionIndicator() {
  const { profile } = useLocalProfile();

  if (profile) {
    return <Hi profile={profile} />;
  }

  return <button onClick={handleLogin}>Login</button>;
}

export default SessionIndicator;
