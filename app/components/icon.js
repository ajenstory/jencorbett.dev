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

const IconWrapper = ({ children, href, label }) => (
  <>
    <div
      className={`${iconStyles.wrapper} ${iconStyles.icon} ${iconStyles.change} `}
    >
      <Link
        label={label}
        href={href}
      >
        <span>
          <Icon
            aria-hidden={true}
            className={`${iconStyles.change} `}
            size={22}
          >
            {children}
          </Icon>
        </span>
      </Link>{" "}
    </div>
  </>
);

export default IconWrapper;
