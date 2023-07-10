import memoryCache from "memory-cache";
import queryString from "query-string";

const CACHE_TTL = 600; // In seconds

/**
 * @func getRefreshToken fetches a new refresh token from Spotify's API, converting refresh token object to url query string.
 * @throws an error with API data and status if there was a problem fetching the refresh token.
 * @returns an object containing the new access token and its expiration time.
 */

const getRefreshToken = async () => {
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
      body: queryString.stringify({
        grant_type: "refresh_token",
        refresh_token,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Failed to get access token from Spotify API. Status code: ${response.status}. Error: ${errorData.error}`
      );
    }

    return response.json();
  } catch (error) {
    throw new Error(
      `Something went wrong while fetching refresh token. Message: ${error.message}`
    );
  }
};

/**
 * @func GetRecentlyPlayed fetches an array of recently played tracks from the Spotify API.
 * @throw error message if something goes wrong during the API call or while fetching the access token.
 * @returns in JSON format.
/ */

export const getRecentlyPlayed = async () => {
  try {
    const { access_token } = await getRefreshToken();
    const url = "https://api.spotify.com/v1/me/player/recently-played";
    const cacheKey = url + access_token;
    const cachedResponse = memoryCache.get(url);

    if (cachedResponse) {
      return cachedResponse;
    }

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Cache-Control": "no-cache",
      },
    });
    memoryCache.put(cacheKey, response, CACHE_TTL * 1000); // Convert seconds to ms
    return response;
  } catch (error) {
    throw new Error(
      `Something went wrong while fetching recently played track. Message: ${error.message}`
    );
  }
};

/**
 * @func GetCurrentlyPlaying fetches currently playing tracks from the Spotify API.
 * @throw error message if something goes wrong during the API call or while fetching the access token.
 * @return array of tracks in JSON format.
 */

export const getCurrentlyPlaying = async () => {
  try {
    const { access_token } = await getRefreshToken();
    const url = "https://api.spotify.com/v1/me/player/currently-playing";
    const cacheKey = url + access_token;
    const cachedResponse = memoryCache.get(url);

    if (cachedResponse) {
      return cachedResponse;
    }

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Cache-Control": "no-cache",
      },
    });

    memoryCache.put(cacheKey, response, CACHE_TTL * 1000); // Convert seconds to ms
    return response;
  } catch (error) {
    throw new Error(
      `Something went wrong while fetching recently played track. Message: ${error.message}`
    );
  }
};

{
  /**
   * Caching ref: chatGPT prompts for optimising performance
   * Spotify player inspired by: [How to show Now Playing in Spotify with Next.js - Theodorus Clarence](https://theodorusclarence.com/blog/spotify-now-playing) & [How to show Now Playing in Spotify with Next.js - Theodorus Clarence](https://theodorusclarence.com/blog/spotify-now
   * and also [How to use Spotify API with Next.js - Jatin Sharma](https://dev.to/j471n/how-to-use-spotify-api-with-nextjs-50o5)
   * with a little help from [A Next.js complete beginner tutorial using the Spotify API - Salma Alam-Naylor](https://whitep4nth3r.com/blog/next-js-beginner-tutorial-using-spotify-api/)
   */
}
