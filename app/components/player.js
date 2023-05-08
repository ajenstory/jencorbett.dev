import Image from "next/image";
import Link from "next/link";
import playerStyles from "@components/player.module.css";
import useSWR from "swr";
// import TextBlock from "./text.js";

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
      <div className={`${playerStyles.container} `}>
        {" "}
        <ol className={`${playerStyles.grid} ${playerStyles.center}`}>
          <li className={``}>
            {" "}
            <div className={`${playerStyles.LinkWrapper}`}>
              <Link target="_blank" href={data.albumUrl}>
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
            <div className={`${playerStyles.textWrapper}`}>
              <span className={`${playerStyles.subtitle}`}>
                <h3> {data.albumName}</h3>{" "}
              </span>
            </div>
          </li>{" "}
          <li>
            <div
              className={`${playerStyles.figWrapper}  ${playerStyles.audio}`}
            >
              {" "}
              <audio
                title="play audio track preview from spotify"
                src={data.audioUrl}
                controls
              >
                <p> play audio preview</p>
              </audio>
            </div>{" "}
            <div className={`${playerStyles.wrapper}`}>
              <span>
                <p>
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
                    {" "}
                    &#183;
                    {data.artist}
                  </Link>{" "}
                </p>
              </span>
            </div>
          </li>{" "}
        </ol>
      </div>
    </>
  );
};

export default Player;
