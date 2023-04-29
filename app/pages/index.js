import NowPlaying from "@components/player";
import Card from "@components/card";
import Header from "@components/header";

export default function Home() {
  return (
    <div>
      <div>
        <Header home />
        <div>
          <Card>
            {" "}
            <h2>Hello, I'm Jen!</h2>
            <p className={``}>
              I'm a developer and web designer based in Ruakākā, Aotearoa New
              Zealand. Thanks for checking out my personal porfolio site. As you
              can see, this is a work in progress.
            </p>
            <p>
              Feel free to reach out on LinkedIn or email me on
              hello[at]jencorbett.dev to check my availability.
            </p>
            <NowPlaying />
          </Card>
        </div>
      </div>
    </div>
  );
}
