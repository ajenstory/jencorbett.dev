import IconWrapper from "@components/icon";
import TextBlock from "@components/text";
import indexStyles from "@styles/index.module.css";
import { FaPaw } from "react-icons/fa";
const description = {
  intro:
    "   Hello! I'm a developer based in Ruakākā, Aotearoa - New Zealand. As you can see, this is a work in progress.",
  cta: "   To say hi or check my availability, please feel free to email me on hello[at]jencorbett.dev",
  social: "   You can also find me on LinkedIn, twitter, or GitHub etc.",
};

export default function Home() {
  return (
    <>
      <div className={`${indexStyles.container} `}>
        <div className={`${indexStyles.grid} `}>
          <div>
            <IconWrapper
              alt="icon"
              href=""
            >
              {" "}
              <FaPaw size={22} />
            </IconWrapper>
            <TextBlock>{description.intro}</TextBlock>
          </div>
          <div>
            {" "}
            <IconWrapper
              alt="icon"
              href=""
            >
              {" "}
              <FaPaw size={22} />
            </IconWrapper>
            <TextBlock>{description.cta}</TextBlock>
          </div>
          <div>
            {" "}
            <IconWrapper
              alt="icon"
              href=""
            >
              {" "}
              <FaPaw size={22} />
            </IconWrapper>
            <TextBlock> {description.social}</TextBlock>
          </div>
        </div>
      </div>
    </>
  );
}
