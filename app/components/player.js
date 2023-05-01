import Image from "next/image";
import Link from "next/link";
import playerStyles from "@components/player.module.css";
// import { Time, Date } from "../components/date";
import useSWR from "swr";
import { SiSpotify } from "react-icons/si";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Player = () => {
  const { data, isError, isLoading } = useSWR(`/api/spotify/track`, fetcher);
  if (isError) return <div>{""}</div>;
  if (isLoading) return <div> Loading...</div>;

  return (
    <>
      {" "}
      <div className={` ${playerStyles.container}  ${playerStyles.border}`}>
        {" "}
        <div className={`  ${playerStyles.grid} `}>
          {" "}
          <figure>
            {" "}
            <Image
              className={`${playerStyles.image} ${playerStyles.center}`}
              width={100}
              height={100}
              quality={100}
              src={data.albumImageUrl}
            />
          </figure>
          <figure>
            <div className={`${playerStyles.audio} ${playerStyles.center}`}>
              <audio
                tabindex={0}
                src={data.audioUrl}
                controls
              ></audio>{" "}
            </div>{" "}
          </figure>{" "}
        </div>{" "}
        <div className={`${playerStyles.figcaption} `}>
          <span>
            <Link
              className={`${playerStyles.itemUrl} `}
              href={data.songUrl}
            >
             Listening to {data.songName}
            </Link>{" "}
            &#183;{" "}
            <Link
              className={`${playerStyles.itemUrl} `}
              href={data.artistUrl}
            >
              {data.artist}
            </Link>{" "}
            {/* &#183;
            <Time
              dateString={JSON.parse(JSON.stringify(data.played_at))}
            />{" "}
            <Date dateString={JSON.parse(JSON.stringify(data.played_at))} />{" "} */}
          </span>{" "}
        </div>{" "}
        <SiSpotify className={`${playerStyles.spotifyicon} `} />{" "}
      </div>
    </>
  );
};

export default Player;
