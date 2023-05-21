import Image from "next/image";
import Link from "next/link";
import playerStyles from "@components/player.module.css";
import useSWR from "swr";
import { SiSpotify } from "react-icons/si";
const fetcher = (...args) => fetch(...args).then((response) => response.json());

const CoverImage = ({ albumUrl, albumImageUrl, albumName, artist }) => (
  <li className={playerStyles.imgWrapper}>
    <Link
      target="_blank"
      href={albumUrl}
    >
      <Image
        className={playerStyles.coverImage}
        width={240}
        height={240}
        quality={100}
        src={albumImageUrl}
        alt={`Cover of Spotify album ${albumName} by ${artist}`}
      />
    </Link>{" "}
  </li>
);

const TrackInfo = ({
  songName,
  songUrl,
  albumName,
  albumUrl,
  artist,
  artistUrl,
  heading,
}) => (
  <div>
    {" "}
    <p className={playerStyles.heading}>
      <SiSpotify /> {heading}{" "}
    </p>
    <p>
      {" "}
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
    </p>
  </div>
);

const AudioPreview = ({ audioUrl }) => (
  <li
    id="audio-controls"
    className={playerStyles.controls}
    data-state="hidden"
  >
    <figure
      className={playerStyles.figure}
      title="Play audio track preview from Spotify"
    >
      <audio
        src={audioUrl}
        preload="metadata"
        controls
      >
        <p>Play audio preview</p>
      </audio>
    </figure>
  </li>
);

const Player = () => {
  const { data, error } = useSWR("/api/spotify/track", fetcher);

  if (error) {
    return <div>Something went wrong</div>;
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
    <div className={`${playerStyles.container}`}>
      <ul className={`${playerStyles.grid}`}>
        <li>
          <CoverImage
            albumUrl={albumUrl}
            albumImageUrl={albumImageUrl}
            albumName={albumName}
            artist={artist}
          />
        </li>
        <TrackInfo
          className={` ${playerStyles.itemTrack} ${playerStyles.trackInfo}`}
          heading={heading}
          songName={songName}
          songUrl={songUrl}
          albumName={albumName}
          albumUrl={albumUrl}
          artist={artist}
          artistUrl={artistUrl}
        />
      </ul>
      <span>
        <AudioPreview
          className={playerStyles.itemAudio}
          audioUrl={audioUrl}
        />
      </span>
    </div>
  );
};

export default Player;
