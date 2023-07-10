import Link from "next/link";
import playerStyles from "@components/player.module.css";
import { AudioPreview } from "../AudioPreview";

export const TrackInfo = ({
  songName,
  songUrl,
  albumName,
  albumUrl,
  artist,
  artistUrl,
  audioUrl,
}) => (
  <span className={playerStyles.item}>
    <Link
      target="_blank"
      href={songUrl}
    >
      {songName}
    </Link>{" "}
    <Link
      target="_blank"
      href={albumUrl}
    >
      &#183; {albumName}
    </Link>{" "}
    <Link
      target="_blank"
      href={artistUrl}
    >
      &#183; {artist}
    </Link>{" "}
    <AudioPreview audioUrl={audioUrl} />
  </span>
);
