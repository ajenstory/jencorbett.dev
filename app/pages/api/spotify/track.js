import { getNowPlaying, getRecentlyPlayed } from "../tracks";
import Date from "components/date";

const checkPlayer = async () => {
  const response = await getNowPlaying();
  console.log(response);
  if (response.status === 204 || response.status > 500) {
    const response = await getRecentlyPlayed();
    console.log(response);
    return response;
  }
  return response;
};

export const player = async () => {
  const response = await checkPlayer();
  if (response.url.includes("recently-played")) {
    const { items } = await response.json();
    console.log(items);
    const track = {
      item: items[0],
      name: items[0].track.name,
      played_at: items[0].played_at,
      album: items[0].track.album.artists[0],
      artist: items[0].track.album.artists[0].name,
      albumImageUrl: items[0].track.album.images[0].url,
      audioUrl: items[0].track.preview_url,
      songUrl: items[0].track.external_urls.spotify,
      heading: "Recently Played",
    };
    return track;
  } else if (
    !response.url.includes("currently-playing") &&
    response.url.includes("currently-playing")
  ) {
    const { item } = await response.json();
    const track = {
      item: item,
      name: item.name,
      album: item.album.name,
      artist: item.artists[0].name,
      artistUrl: item.artists[0].uri,
      audioUrl: item.uri,
      songUrl: item.external_urls.spotify,
      albumImageUrl: item.album.images[0].url,
      heading: "Currently playing",
    };
    return track;
  }

  return error(console.log("Something went wrong"));
};

export default async function (req, res) {
  const response = await player();
  console.log(response);
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
