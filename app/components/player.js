import Image from "next/image";
import Link from "next/link";
import TextBlock from "./text.js";
import playerStyles from "@components/player.module.css";
import { PlayedAt } from "./date.js";

import useSWR from "swr";

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
      {" "}
      <div className={`${playerStyles.wrapper}`}>
        {" "}
        <figure>
          {" "}
          <Link href={data.albumUrl}>
            <Image
              className={` ${playerStyles.coverimage} `}
              width={240}
              height={240}
              quality={100}
              src={data.albumImageUrl}
            />
          </Link>
          <div className={`${playerStyles.caption} `}>
            <p>
              <h3> {data.heading}</h3>{" "}
              <div className={` ${playerStyles.audio} `}>
                <audio
                  src={data.audioUrl}
                  controls
                ></audio>
              </div>
              <TextBlock>
                {" "}
                <Link
                  target="_blank"
                  aria-label={`${data.songName}  &#183;  ${data.artist}`}
                  className={`${playerStyles.itemurl} `}
                  href={data.songUrl}
                >
                  {data.songName}
                </Link>{" "}
                &#183;{" "}
                <Link
                  target="_blank"
                  aria-label={`${data.artist}`}
                  className={`${playerStyles.itemUrl}`}
                  href={data.artistUrl}
                >
                  {data.artist}
                </Link>{" "}
                <PlayedAt data={data.playedAt} />
              </TextBlock>{" "}
            </p>{" "}
          </div>
        </figure>
      </div>
    </>
  );
};

export default Player;
