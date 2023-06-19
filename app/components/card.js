import Link from "next/link";
import Image from "next/image";
import layoutStyles from "@components/layout.module.css";
const profilePic = "/profile.jpg";

const title = "Jen Corbett";

const Card = ({ title, children }) => (
  <div>
    <Link href="https://github.com/ajenstory/jencorbett.dev">
      <Image
        className={`${layoutStyles.borderCircle}`}
        priority
        src={profilePic}
        height={108}
        width={108}
        alt="Profile picture of Jen deep in thought"
      />
      {title}
    </Link>{" "}
  </div>
);

export default Card;
