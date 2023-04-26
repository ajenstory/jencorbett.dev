import Card from "./card";
const Logo = ({ logo }) => {
  return (
    <Card>
      <Image
        width="60"
        height="60"
        src={logo}
      ></Image>
    </Card>
  );
};

export default Card;
