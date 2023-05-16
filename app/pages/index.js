import indexStyles from "@styles/index.module.css";
import TextBlock from "@components/text";
const description = {
  intro: "I'm a developer based in Ruakākā, Aotearoa - New Zealand.",
  about:
    "I've recently graduated from my studies in Web Development and Design, transitioning from a background of more than 10 years in social media and digital marketing.",
  details:
    "I'm currently working on a few projects, including this site while I seek internship and opportunities to gain technical experience.",
  cta: " I'm also available for freelance work. To say hi or check my availability, please feel free to email me on hello[at]jencorbett.dev",
  social: "You can also find me on LinkedIn, Twitter, Mastodon or GitHub.",
};

const Home = () => {
  return (
    <>
      {" "}
      <section>
        <div className={indexStyles.indexContainer}>
          <div className={indexStyles.wrapper}>
            <p className={indexStyles.item}>{description.intro}</p>

            <p className={indexStyles.item}>{description.details}</p>

            <p className={indexStyles.item}>{description.about}</p>

            <p className={indexStyles.item}>{description.cta}</p>

            <p className={indexStyles.item}>{description.social}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
