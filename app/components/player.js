import Image from "next/image";
import Link from "next/link";
import playerStyles from "@components/player.module.css";
import useSWR from "swr";
import TextBlock from "./text";

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
      <div
        className={`${playerStyles.playerContainer} ${playerStyles.grid} ${playerStyles.center}`}
      >
        {" "}
        <li className={``}>
          {" "}
          <TextBlock>
            <div className={`${playerStyles.LinkWrapper}`}>
              {" "}
              <Link
                target="_blank"
                href={data.albumUrl}
              >
                <div className={`${playerStyles.ImgWrapper} `}>
                  {" "}
                  <Image
                    className={`${playerStyles.coverImage}`}
                    width={240}
                    height={240}
                    quality={100}
                    src={data.albumImageUrl}
                    alt={`cover of spotify album ${data.albumName} by ${data.artist}`}
                  />
                </div>
              </Link>
            </div>
          </TextBlock>{" "}
          <div className={`${playerStyles.textWrapper}`}></div>{" "}
          <div className={`${playerStyles.figWrapper}  ${playerStyles.audio}`}>
            {" "}
          </div>{" "}
        </li>{" "}
        <div className={``}>
          <p>
            {" "}
            <p>{data.heading}</p>
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
              href={data.songUrl}
            >
              {data.albumName}
            </Link>{" "}
            &#183;{" "}
            <Link
              target="_blank"
              className={`${playerStyles.itemUrl} `}
              href={data.artistUrl}
            >
              {data.artist}
            </Link>{" "}
          </p>{" "}
          <div className={`${playerStyles.figWrapper}  ${playerStyles.audio}`}>
            {" "}
            <audio
              title="play audio track preview from spotify"
              src={data.audioUrl}
              controls
            >
              <p> play audio preview</p>
            </audio>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Player;
