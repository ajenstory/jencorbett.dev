import playerStyles from "@components/player.module.css";
import Error from "next/error.js";

import { CoverImage } from "./CoverImage";
import { TrackInfo } from "../TrackInfo";

import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((response) => response.json());

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
