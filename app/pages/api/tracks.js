import queryString from "query-string";

const getAccessToken = async () => {
  try {
    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      // converts refresh token object to url query string
      body: queryString.stringify({
        grant_type: "refresh_token",
        refresh_token,
      }),
    });
    return response.json();
  } catch (err) {
    console.error(err.message);
    throw new Error(
      `Something went wrong while fetching refresh token. Message: ${err.message}`
    );
  }
};

export const getRecentlyPlayed = async () => {
  try {
    // get access token from Spotify API
    const { access_token } = await getAccessToken();
    // fetch recently played tracks from Spotify API
    return fetch("https://api.spotify.com/v1/me/player/recently-played", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (err) {
    // handle errors
    throw new Error(
      `Something went wrong while fetching recently played track. Message: ${err.message}`
    );
  }
};

export const getCurrentlyPlaying = async () => {
  try {
    const { access_token } = await getAccessToken();
    // fetch currently playing track from Spotify API
    return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (err) {
    // handle errors
    throw new Error(
      `Something went wrong while fetching recently played track. Message: ${err.message}`
    );
  }
};

{
  /*

Spotify player inspired by: [How to show Now Playing in Spotify with Next.js - Theodorus Clarence](https://theodorusclarence.com/blog/spotify-now-playing) & [How to show Now Playing in Spotify with Next.js - Theodorus Clarence](https://theodorusclarence.com/blog/spotify-now
and also [How to use Spotify API with Next.js - Jatin Sharma](https://dev.to/j471n/how-to-use-spotify-api-with-nextjs-50o5)
with a little help from [A Next.js complete beginner tutorial using the Spotify API - Salma Alam-Naylor](https://whitep4nth3r.com/blog/next-js-beginner-tutorial-using-spotify-api/)
*/
}
