import useLocalStorageState from "use-local-storage-state";

export default function useLocalProfile() {
  const [profile, setProfile] = useLocalStorageState<LocalProfile>(
    "localProfile",
    {
      defaultValue: undefined,
    },
  );

  return {
    profile,
    setProfile,
  };
}
