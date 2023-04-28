import Link from "next/link";
import HeadComponent from "@components/head";
import div from "../components/card";
import Header from "../components/header";
import utilStyles from "@styles/utils.module.css";
import styles from "@styles/Home.module.css";
import Image from "next/image";

import { SiSpotify } from "react-icons/si";
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
    <div className={` ${styles.center}`}>
      <SiSpotify
        size={64}
        color={"#1ED760"}
      />
      <div>
        <Image
          src={data.albumImageUrl}
          height={64}
          width={64}
          alt="Spotify album cover art"
        ></Image>
      </div>{" "}
      <div>
        <p>
          {console.log(data)}
          {data.name}
        </p>
      </div>
      <div>
        <p>
          {console.log(data)}
          {data.artist}
        </p>
      </div>
      <div>
        <p>
          {console.log(data)}
          {data.artist}
        </p>
      </div>
      <div>
        {" "}
        <p>{console.log(data)}</p>{" "}
      </div>
    </div>
  );
};
