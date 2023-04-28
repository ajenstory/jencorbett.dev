import Link from "next/link";
import HeadComponent from "@components/head";

import Header from "../components/header";
import utilStyles from "@styles/utils.module.css";
import styles from "@styles/Home.module.css";
import Image from "next/image";

import { SiSpotify } from "react-icons/si";
import { FiMusic } from "react-icons/fi";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import useSWR from "swr";
export default function Home() {
  return (
    <div>
      <HeadComponent />

      <Header home />

      <div className={` ${styles.center} ${styles.grid}`}>
        <div>
          <h2 className={`${inter.className} `}>Hello, I'm Jen!</h2>
          <p>
            {" "}
            I'm a developer and digital strategist based in Ruakākā, Aotearoa
            New Zealand.
          </p>
          <p>
            I'm currently working on this site. So there's not much to see here
            yet! Please bookmark for now and check back soon. In the meantime,
            feel free to reach out on LinkedIn or get in touch directly on{" "}
            <span className={`${utilStyles.bold} `}>
              hello[at]jencorbett.dev
            </span>
            .
          </p>
        </div>{" "}
      </div>
      <div className={`${styles.div} ${styles.grid}`}>
        <div>
          <Link href="https://linkedin.com/in/jencorbett">
            <h2 className={``}>
              Linkedin <span>-&gt;</span>
            </h2>
          </Link>
        </div>

        <div>
          <Link href="https://github.com/ajenstory">
            <h2 className={``}>
              Github <span>-&gt;</span>
            </h2>
          </Link>
        </div>
        <div>
          <Link href="https://mastodon.nz/@jen">
            <h2 className={``}>
              Mastodon <span>-&gt;</span>
            </h2>
          </Link>
        </div>
        <div>
          <Link href="https://twitter.com/@ajenstory">
            <h2 className={`${styles.card.h2}`}>
              Twitter <span>-&gt;</span>
            </h2>
          </Link>
        </div>
      </div>
      <div>
        {" "}
        <small className={` ${styles.center} ${styles.grid}`}>
          <NowPlaying />
        </small>
      </div>
    </div>
  );
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const NowPlaying = () => {
  const { data, error } = useSWR("/api/spotify/player", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div
      className={`${utilStyles.player} ${utilStyles.padding} ${utilStyles.center}${styles.playerGrid}`}
    >
      <h2>
        {" "}
        Now playing{" "}
        <span className={`${utilStyles.left}`}>
          <FiMusic size="18" />
        </span>{" "}
      </h2>{" "}
      <div className={` `}>
        {" "}
        <div>
          <Image
            src={data.albumImageUrl}
            height={180}
            width={180}
            quality={100}
            alt="Spotify album cover art"
          ></Image>
        </div>
        <div className={`${styles.playerGrid}}`}>
          <ol>
            <Link href={data.songUrl}>
              {" "}
              <li>
                <SiSpotify />
              </li>
              <li>
                {console.log(data)}
                {data.name}{" "}
              </li>
            </Link>
            <li>
              {console.log(data)}
              {data.artist}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
