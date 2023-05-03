import Link from "next/link";
import iconStyles from "./icon.module.css";

const Icon = ({ children, alt, size }) => (
  <div
    alt={alt}
    size={size}
  >
    {children}
  </div>
);

const IconWrapper = ({ children, href }) => (
  <>
    <div
      className={`${iconStyles.wrapper} ${iconStyles.icon} ${iconStyles.change} `}
    >
      <Link href={href}>
        <Icon
          className={`${iconStyles.change} `}
          size={22}
        >
          {children}
        </Icon>
      </Link>{" "}
    </div>
  </>
);

export default IconWrapper;
