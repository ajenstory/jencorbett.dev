import Image from "next/image";
import Link from "next/link";
import playerStyles from "@components/player.module.css";
import { Time, Date } from "../utils/date.js";

import useSWR from "swr";
import { SiSpotify } from "react-icons/si";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Player = () => {
  const { data, isError, isLoading } = useSWR("/api/spotify/track", fetcher);
  if (isError) {
    return <div>Something went wrong</div>;
  }

  if (isLoading) {
    return <div> Loading...</div>;
  }

  return (
    <>
      <div className={`${playerStyles.wrapper}`}>
        <div className={` ${playerStyles.coverImage} ${playerStyles.center}  `}>
          <Image
            className={` ${playerStyles.coverImage} `}
            width={64}
            height={64}
            quality={100}
            src={data.albumImageUrl}
          />
          <audio
            src={data.audioUrl}
            controls
          ></audio>
          <p>
            <Link
              aria-label={`${data.heading} ${data.songName}  &#183;  ${data.artist}`}
              className={`${playerStyles.itemUrl} `}
              href={data.songUrl}
            >
              {data.heading}
              {data.songName}
            </Link>{" "}
            &#183;{" "}
            <Link
              aria-label={`${data.artist}`}
              className={`${playerStyles.itemUrl} `}
              href={data.artistUrl}
            >
              {data.artist}
            </Link>{" "}
            <SiSpotify className={`${playerStyles.spotifyicon} `} /> &#183;{" "}
            <div className={`${playerStyles.figCaption}`}>
              <Date dateString={JSON.parse(JSON.stringify(data.played_at))} />{" "}
              <Time dateString={JSON.parse(JSON.stringify(data.played_at))} />{" "}
              {console.log(data.played_at)}
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default Player;
