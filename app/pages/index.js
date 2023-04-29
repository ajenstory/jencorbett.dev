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
            <p className={``}>
              I'm a developer and web designer based in Ruakākā, Aotearoa New
              Zealand. To say hi or check my availability, feel free to reach
              out to me on your social channel of choice or email me on
              hello[at]jencorbett.dev.
            </p>
            <NowPlaying />
          </Card>
        </div>
      </div>
    </div>
  );
}
