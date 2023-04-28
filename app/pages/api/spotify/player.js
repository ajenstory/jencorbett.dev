import { getNowPlaying } from "../getNowPlaying";

export const player = async () => {
  const response = await getNowPlaying();
  console.log(response);

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
  console.log(response);
  return res.status(200).json(response);
}
