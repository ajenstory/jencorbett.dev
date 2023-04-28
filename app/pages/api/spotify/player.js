import { getNowPlaying, getRecentlyPlayed } from "../getNowPlaying";

export const player = async () => {
  const response = await getNowPlaying();

  if (!getNowPlaying) {
    const response = await getRecentlyPlayed();
    return response;
  }
  const { item } = await response.json();

  const track = {
    item,
    name: item.name,
    album: item.album.name,
    artist: item.artists[0].name,
    songUrl: item.external_urls.spotify,
    albumImageUrl: item.album.images[0].url,
  };
  return track;
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
