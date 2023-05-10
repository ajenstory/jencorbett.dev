import { FaPaw } from "react-icons/fa";
import { SiSpotify } from "react-icons/si";
import IconWrapper from "@components/icon";
import TextBlock from "@components/text";
import Player from "@components/player";
import indexStyles from "@styles/index.module.css";
const description = {
  intro:
    "I'm a developer based in Ruakākā, Aotearoa - New Zealand. As you can see, this is a work in progress.",
  cta: "To say hi or check my availability, please feel free to email me on hello[at]jencorbett.dev",
  social: "You can also find me on LinkedIn, Twitter, Mastodon or GitHub.",
  spotify: "What's in rotation on my Spotify account:",
};

const Home = () => {
  return (
    <>
      <div className={`${indexStyles.container} `}>
        <section className={`${indexStyles.grid} `}>
          {" "}
          <Block
            title="About"
            text={description.intro}
            Icon={FaPaw}
            href="https://www.google.com/maps/place/Ruakaka+Beach/@-35.9176644,174.4861701,13z/data=!4m14!1m7!3m6!1s0x6d0c9b183750f961:0xf686d0dca449a435!2sRuakaka+Beach!8m2!3d-35.9084902!4d174.460184!16s%2Fg%2F11df1t9dyq!3m5!1s0x6d0c9b183750f961:0xf686d0dca449a435!8m2!3d-35.9084902!4d174.460184!16s%2Fg%2F11df1t9dyq"
            altTitle="View my location on Google Maps"
          />
          <Block
            title="Contact"
            text={description.cta}
            Icon={FaPaw}
            href="mailto:hello@jencorbett.dev"
            altTitle="Email me directly on hello@jencorbett.dev"
          />
          <Block
            title="Connect"
            text={description.social}
            Icon={FaPaw}
            href="https://www.linkedin.com/in/jencorbett"
            altTitle="Visit my LinkedIn profile"
          />
        </section>
        <section className={`${indexStyles.panel}`}>
          <Block
            title="Spotify"
            text={description.spotify}
            Icon={SiSpotify}
            href="https://open.spotify.com/user/1221141852"
            altTitle="Check out my Spotify playlist"
          />
        </section>{" "}
        <div className={`${indexStyles.player}`}>
          <Player title="Spotify music player" />
        </div>
      </div>
    </>
  );
};

const Block = ({ title, text, Icon, href, altTitle }) => (
  <>
    {" "}
    <div className={`${indexStyles.block}`}>
      <IconWrapper
        title={altTitle}
        href={href}
        aria-label={altTitle}
      >
        <Icon size={28} />
      </IconWrapper>{" "}
      <TextBlock>
        <h2 className={`${indexStyles.subtitle} `}>{title} </h2>
      </TextBlock>
      <TextBlock>{text}</TextBlock>
    </div>
  </>
);

export default Home;
