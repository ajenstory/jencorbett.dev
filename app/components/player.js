import Image from "next/image";
import Link from "next/link";
import utilStyles from "@styles/utils.module.css";
import Date from "../components/date";
import useSWR from "swr";
import { FaSpotify } from "react-icons/fa";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const NowPlaying = () => {
  const { data, isError, isLoading } = useSWR(`/api/spotify/track`, fetcher);

  if (isError) return <div>{""}</div>;
  if (isLoading) return <div> Loading...</div>;

  return (
    <div className={` ${utilStyles.player} ${utilStyles.block} `}>
      <h3>{`${data.heading}`}</h3>{" "}
      <div className={utilStyles.padding}>
        <Link href={data.songUrl}>
          {" "}
          <Image
            className={`${utilStyles.image}`}
            src={data.albumImageUrl}
            height={100}
            width={100}
            quality={100}
            alt="Spotify album cover art"
          ></Image>
          <div className={`${utilStyles.headingSM}`}>
            <p>
              {`${data.artist}`} - {`${data.name}`}
            </p>{" "}
            <p>
              <FaSpotify />{" "}
              <Date dateString={JSON.parse(JSON.stringify(data.played_at))} />{" "}
            </p>
          </div>{" "}
        </Link>
      </div>
      <div>
        <audio src={data.audioUrl} controls></audio>
      </div>
      {console.log(data)}
    </div>
  );
};

export default NowPlaying;
