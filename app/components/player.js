import Image from "next/image";
import Link from "next/link";
import playerStyles from "@components/player.module.css";
import useSWR from "swr";
import TextBlock from "./text.js";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

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
      <div className={`${playerStyles.container}`}>
        {" "}
        <section>
          {" "}
          <Link
            target="_blank"
            href={data.albumUrl}
          >
            {" "}
            <div
              className={`${playerStyles.subtitle} ${playerStyles.caption} ${playerStyles.wrapper}`}
            >
              {" "}
              <div className={` ${playerStyles.wrapper} `}>
                {" "}
                <h2>Spotify</h2>
              </div>
              <h3> {data.heading}</h3>
            </div>
            <Image
              className={` ${playerStyles.coverImage} `}
              width={240}
              height={240}
              quality={100}
              src={data.albumImageUrl}
              alt={`cover of spotify album ${data.albumName} by ${data.artist}`}
            />
          </Link>
          <div className={`${playerStyles.subtitle} ${playerStyles.wrapper}`}>
            {" "}
            <h3> {data.albumName}</h3>{" "}
            <div className={` ${playerStyles.audio} `}>
              <figure>
                <audio
                  title="play spotify audio track preview"
                  src={data.audioUrl}
                  controls
                >
                  play audio
                </audio>
              </figure>
            </div>
            <TextBlock>
              {" "}
              <h4>
                {" "}
                <Link
                  target="_blank"
                  className={`${playerStyles.itemUrl} `}
                  href={data.songUrl}
                >
                  {data.songName}
                </Link>{" "}
                &#183;{" "}
                <Link
                  target="_blank"
                  className={`${playerStyles.itemUrl} `}
                  href={data.artistUrl}
                >
                  {data.artist}
                </Link>{" "}
              </h4>
              &#183;
            </TextBlock>{" "}
          </div>
        </section>
      </div>
    </>
  );
};

export default Player;
