import Image from "next/image";
import Link from "next/link";
import playerStyles from "@components/player.module.css";
import useSWR from "swr";
import Error from "next/error.js";
import { SiSpotify } from "react-icons/si";
const fetcher = (...args) => fetch(...args).then((response) => response.json());

const CoverImage = ({ albumUrl, albumImageUrl, albumName, artist }) => (
  <span className={playerStyles.imgWrapper}>
    <Link
      target="_blank"
      href={albumUrl}
    >
      {" "}
      <Image
        className={playerStyles.coverImage}
        width={240}
        height={240}
        quality={100}
        src={albumImageUrl}
        alt={`Cover of Spotify album ${albumName} by ${artist}`}
      />
    </Link>{" "}
  </span>
);

const TrackInfo = ({
  songName,
  songUrl,
  albumName,
  albumUrl,
  artist,
  artistUrl,
  x,
}) => (
  <ul>
    {" "}
    <li>
      <Link
        target="_blank"
        className={playerStyles.itemUrl}
        href={songUrl}
      >
        {songName}
      </Link>{" "}
      &#183;{" "}
      <Link
        target="_blank"
        className={playerStyles.itemUrl}
        href={albumUrl}
      >
        {albumName}
      </Link>{" "}
      &#183;{" "}
      <Link
        target="_blank"
        className={playerStyles.itemUrl}
        href={artistUrl}
      >
        {artist}
      </Link>{" "}
    </li>
  </ul>
);

const AudioPreview = ({ audioUrl }) => (
  <li
    id="audio-controls"
    className={playerStyles.controls}
  >
    <figure
      className={playerStyles.figure}
      title="Play audio track preview from Spotify"
    >
      {" "}
      <audio
        src={audioUrl}
        preload="metadata"
        controls
        className={playerStyles.audioPlayer}
      >
        <p>Play audio preview</p>
      </audio>
    </figure>
  </li>
);

const Player = () => {
  const { data, error } = useSWR("/api/spotify/track", fetcher);

  if (error) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const {
    albumUrl,
    albumImageUrl,
    albumName,
    artist,
    artistUrl,
    audioUrl,
    heading,
    songName,
    songUrl,
  } = data;

  return (
    <>
      <div className={playerStyles.container}>
        <ul className={`${playerStyles.grid} ${playerStyles.playerItems}`}>
          <li>
            {" "}
            <CoverImage
              albumUrl={albumUrl}
              albumImageUrl={albumImageUrl}
              albumName={albumName}
              artist={artist}
            />
          </li>{" "}
          <li>
            {" "}
            <SiSpotify className={playerStyles.button} /> {heading}{" "}
            <TrackInfo
              className={` ${playerStyles.itemTrack} ${playerStyles.trackInfo}`}
              heading={heading}
              songName={songName}
              songUrl={songUrl}
              albumName={albumName}
              albumUrl={albumUrl}
              artist={artist}
              artistUrl={artistUrl}
            />{" "}
            <AudioPreview
              className={playerStyles.itemAudio}
              audioUrl={audioUrl}
            />
          </li>
        </ul>{" "}
      </div>
    </>
  );
};

export default Player;
