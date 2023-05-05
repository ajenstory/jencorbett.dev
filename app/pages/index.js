import IconWrapper from "@components/icon";
import TextBlock from "@components/text";
import Player from "@components/player";
import indexStyles from "@styles/index.module.css";
import { FaPaw } from "react-icons/fa";
import { SiSpotify } from "react-icons/si";
const description = {
  intro:
    "  I'm a developer based in Ruakākā, Aotearoa - New Zealand. As you can see, this is a work in progress.",
  cta: "   To say hi or check my availability, please feel free to email me on hello[at]jencorbett.dev",
  social: "   You can also find me on LinkedIn, Twitter, Mastodon or GitHub.",
};

export default function Home() {
  return (
    <>
      <div className={`${indexStyles.container} `}>
        <div className={`${indexStyles.grid} `}>
          <div className={`${indexStyles.subtitle} `}>
            <IconWrapper
              alt="icon"
              href="https://goo.gl/maps/LqfnwxnbCmHwgqiv8"
            >
              <FaPaw size={28} />
            </IconWrapper>
            <h2> Hello! </h2> <TextBlock>{description.intro}</TextBlock>
          </div>
          <div className={`${indexStyles.subtitle} `}>
            <IconWrapper
              alt="icon"
              href="mailto:hello@jencorbett.dev"
            >
              <FaPaw size={28} />
            </IconWrapper>
            <h2>Contact</h2>
            <TextBlock>{description.cta}</TextBlock>
          </div>
          <div className={`${indexStyles.subtitle} `}>
            <IconWrapper
              alt="icon"
              href="https://www.linkedin.com/in/jencorbett"
            >
              <FaPaw size={28} />
            </IconWrapper>
            <h2>Connect</h2>
            <TextBlock> {description.social}</TextBlock>
          </div>{" "}
        </div>{" "}
        <div className={`${indexStyles.panel}`}>
          <IconWrapper
            alt="icon"
            href="https://www.linkedin.com/in/jencorbett"
          >
            <SiSpotify size={28} />{" "}
          </IconWrapper>
          <Player />
        </div>{" "}
      </div>
    </>
  );
}
