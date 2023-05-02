import { getNowPlaying, getRecentlyPlayed } from "../tracks";

const checkPlayer = async () => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 500) {
    const response = await getRecentlyPlayed();
    return response;
  }
  return response;
};

export const player = async () => {
  const response = await checkPlayer();

  if (response.url.includes("recently-played")) {
    const { items } = await response.json();

    const tracks = {
      item: items[0],
      songName: items[0].track.name,
      played_at: items[0].played_at,
      albumName: items[0].track.album.name,
      artist: items[0].track.album.artists[0].name,
      artistUrl: items[0].track.artists[0].external_urls.spotify,
      albumUrl: items[0].track.album.external_urls.spotify,
      albumImageUrl: items[0].track.album.images[0].url,
      audioUrl: items[0].track.preview_url,
      songUrl: items[0].track.external_urls.spotify,
      heading: "Recently Played",
    };
    return tracks;
  } else if (
    !response.url.includes("recently-played") &&
    response.url.includes("currently-playing")
  ) {
    const { item } = await response.json();

    const track = {
      item: item,
      songName: item.name,
      albumName: item.album.name,
      artist: item.artists[0].name,
      artistUrl: item.artists[0].uri,
      albumUrl: item.album.external_urls.spotify,
      audioUrl: item.preview_url,
      songUrl: item.external_urls.spotify,
      albumImageUrl: item.album.images[0].url,
      heading: "Currently playing",
    };

    return track;
  } else if (!response) {
    const error = new Error("Something went wrong");
    return error;
  }
  return response;
};

export default async function (req, res) {
  const response = await player();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json(response);
}

{
  /*

Spotify player inspired by: [How to show Now Playing in Spotify with Next.js - Theodorus Clarence](https://theodorusclarence.com/blog/spotify-now-playing) & [How to show Now Playing in Spotify with Next.js - Theodorus Clarence](https://theodorusclarence.com/blog/spotify-now
and also [How to use Spotify API with Next.js - Jatin Sharma](https://dev.to/j471n/how-to-use-spotify-api-with-nextjs-50o5)
with a little help from [A Next.js complete beginner tutorial using the Spotify API - Salma Alam-Naylor](https://whitep4nth3r.com/blog/next-js-beginner-tutorial-using-spotify-api/)
 */
}
