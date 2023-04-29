import Image from "next/image";
import Link from "next/link";
import utilStyles from "@styles/utils.module.css";
import styles from "@styles/Home.module.css";
import { FiMusic } from "react-icons/fi";

import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const NowPlaying = () => {
  const { data, isError, isLoading } = useSWR(`/api/spotify/track`, fetcher);

  if (isError) return <div>{""}</div>;
  if (isLoading)
    return (
      <div>
        {" "}
        <span className={`${utilStyles.left}`}>
          <FiMusic
            size="18"
            alt="Musical notes icon"
          />
        </span>
        Loading...
      </div>
    );

  return (
    <div className={` ${utilStyles.player} ${utilStyles.block} `}>
      <p>Listening to...</p>{" "}
      <div>
        <Image
          className={`${utilStyles.image}`}
          src={data.albumImageUrl}
          height={100}
          width={100}
          quality={100}
          alt="Spotify album cover art"
        ></Image>
      </div>{" "}
      <Link href={data.songUrl}>
        <p>
          {`${data.artist}`} - {`${data.name}`}
        </p>
      </Link>
      <audio
        src={data.songUrl}
        controls
      ></audio>
      {console.log(data)}
    </div>
  );
};

export default NowPlaying;
