import Image from "next/image";
import Link from "next/link";
import playerStyles from "@components/player.module.css";

export const CoverImage = ({ albumUrl, albumImageUrl, albumName, artist }) => (
  <span className={playerStyles.imgWrapper}>
    <Link
      target="_blank"
      href={albumUrl}
    >
      {" "}
      <Image
        className={playerStyles.coverImage}
        width={240}
        height={240}
        quality={100}
        src={albumImageUrl}
        alt={`Cover of Spotify album ${albumName} by ${artist}`}
      />
    </Link>{" "}
  </span>
);
