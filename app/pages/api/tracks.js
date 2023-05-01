import queryString from "query-string";

const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: queryString.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });
  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();
  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getCurrentTrack = async (id) => {
  const { access_token } = await getAccessToken();
  return fetch(`https://api.spotify.com/v1/tracks/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getRecentlyPlayed = async () => {
  const { access_token } = await getAccessToken();
  return fetch("https://api.spotify.com/v1/me/player/recently-played", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

{
  /*

Spotify player inspired by: [How to show Now Playing in Spotify with Next.js - Theodorus Clarence](https://theodorusclarence.com/blog/spotify-now-playing) & [How to show Now Playing in Spotify with Next.js - Theodorus Clarence](https://theodorusclarence.com/blog/spotify-now
and also [How to use Spotify API with Next.js - Jatin Sharma](https://dev.to/j471n/how-to-use-spotify-api-with-nextjs-50o5)
with a little help from [A Next.js complete beginner tutorial using the Spotify API - Salma Alam-Naylor](https://whitep4nth3r.com/blog/next-js-beginner-tutorial-using-spotify-api/)
*/
}
