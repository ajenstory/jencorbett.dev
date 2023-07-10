import Link from "next/link";
import Image from "next/image";
import layoutStyles from "@components/layout.module.css";
const profilePic = "/profile.jpg";

const Avatar = ({ title }) => (
  <div>
    <Link href="https://github.com/ajenstory/jencorbett.dev">
      <Image
        className={`${layoutStyles.borderCircle}`}
        priority
        src={profilePic}
        height={108}
        width={108}
        alt=""
      />
      {title}
    </Link>{" "}
  </div>
);

export default Avatar;
