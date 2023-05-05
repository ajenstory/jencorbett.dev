import Link from "next/link";
import iconStyles from "./icon.module.css";

const Icon = ({ children, alt, size }) => (
  <div alt={alt} size={size}>
    {children}
  </div>
);

const IconWrapper = ({ children, href, label, size }) => (
  <>
    <div
      className={`${iconStyles.wrapper} ${iconStyles.icon} ${iconStyles.change} `}
    >
      <Link target="_blank" label={label} href={href}>
        <span>
          <Icon
            aria-hidden={true}
            className={`${iconStyles.change} `}
            size={size}
          >
            {children}
          </Icon>
        </span>
      </Link>{" "}
    </div>
  </>
);

export default IconWrapper;
