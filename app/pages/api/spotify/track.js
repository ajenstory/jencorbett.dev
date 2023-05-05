import { getRecentlyPlayed, getCurrentlyPlaying } from "../tracks.js";

/**
 * Checks for currently playing or most recently played track from the Spotify API.
 * @returns {Object} - The user's currently playing or most recently played track.
 * @throws {Error} - If the request to the Spotify API fails.
 */

const getSpotifyTracks = async () => {
  try {
    const tracks = await getCurrentlyPlaying();
    if (tracks.status === 204 || tracks.status > 500) {
      const track = await getRecentlyPlayed();
      return track;
    }

    return tracks;
  } catch (error) {
    throw new Error(
      `Something went wrong checking for tracks 😔 -- ${error.message}`
    );
  }
};

/**
 * Returns a random track from the recently played array.
 * @param {Array} items - The array to select a random item from.
 * @returns {Object|null} - The randomly selected item from the array, or null if the array is empty or not an array.
 */

export const getRandomTrack = (items) => {
  const shuffle = Math.floor(Math.random() * items.length);

  return items[shuffle];
};

const setTrack = (item) => ({
  songName: item.name,
  albumName: item.album.name,
  artist: item.artists[0].name,
  artistUrl: item.artists[0].external_urls.spotify,
  albumUrl: item.album.external_urls.spotify,
  albumImageUrl: item.album.images[0].url,
  audioUrl: item.preview_url,
  songUrl: item.external_urls.spotify,
});

export const getTrack = async () => {
  const track = await getSpotifyTracks();
  if (!track) {
    throw new Error("Something went wrong fetching the track ");
  }
  if (track.url.includes("currently-playing")) {
    const { item } = await track.json();

    const playedAt = new Date();

    const current = {
      playedAt,
      heading: "I'm currently listening to...",
      ...setTrack(item),
    };

    return current;
  }

  if (track.url.includes("recently-played")) {
    const { items } = await track.json();

    const randomTrack = await getRandomTrack(items);

    const recentlyPlayed = {
      playedAt: randomTrack.played_at || items[0].played_at,
      heading: "I was just listening to...",
      ...setTrack(randomTrack.track || items),
    };

    return recentlyPlayed;
  }

  return track;
};

const Track = async (request, response) => {
  try {
    const track = await getTrack();
    response.setHeader(
      `Cache-Control`,
      `public, s-maxage=86400, stale-while-revalidate=43200`
    );
    return response.status(200).json(track);
  } catch (error) {
    if (error.message === "No tracks found") {
      return response.status(404).json({ error: "No tracks found" });
    }
    throw new Error(`Something went wrong with the API 😔 -- ${error.message}`);
  }
};

export default Track;

/*

Spotify player inspired by: [How to show Now Playing in Spotify with Next.js - Theodorus Clarence](https://theodorusclarence.com/blog/spotify-now-playing) & [How to show Now Playing in Spotify with Next.js - Theodorus Clarence](https://theodorusclarence.com/blog/spotify-now
and also [How to use Spotify API with Next.js - Jatin Sharma](https://dev.to/j471n/how-to-use-spotify-api-with-nextjs-50o5)
with a little help from [A Next.js complete beginner tutorial using the Spotify API - Salma Alam-Naylor](https://whitep4nth3r.com/blog/next-js-beginner-tutorial-using-spotify-api/)
 */
