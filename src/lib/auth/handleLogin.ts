function handleLogin() {
  const params = new URLSearchParams({
    client_id: process.env.NEXT_PUBLIC_BUNGIE_CLIENT_ID!,
    response_type: "code",
    redirect_uri: process.env.NEXT_PUBLIC_BUNGIE_REDIRECT_URI!,
  });
  window.location.href = `https://www.bungie.net/en/OAuth/Authorize?${params}`;
}

export default handleLogin;
