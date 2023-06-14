import Image from "next/image";
import Link from "next/link";
import playerStyles from "@components/player.module.css";
import Error from "next/error.js";

import useSWR from "swr";
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
    heading,
    songName,
    songUrl,
  } = data;

  return (
    <>
      <div className={`${playerStyles.container} `}>
        <CoverImage
          albumUrl={albumUrl}
          albumImageUrl={albumImageUrl}
          albumName={albumName}
          artist={artist}
        />{" "}
        <ul className={`${playerStyles.flexWrap}  `}>
          <li className={`${playerStyles.trackItem} ${playerStyles.flexItem}`}>
            <TrackInfo
              heading={heading}
              songName={songName}
              songUrl={songUrl}
              albumName={albumName}
              albumUrl={albumUrl}
              artist={artist}
              artistUrl={artistUrl}
            />{" "}
          </li>
        </ul>{" "}
      </div>
    </>
  );
};

export default Player;
