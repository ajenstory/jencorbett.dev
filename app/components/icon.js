import iconStyles from "./icon.module.css";
import Link from "next/link";

const Icon = ({ children, alt, size }) => {
  return (
    <div
      alt={alt}
      size={size}
    >
      {children}
    </div>
  );
};

const IconWrapper = ({ children, href }) => {
  return (
    <>
      <Link
        href={href}
        className={`${iconStyles.wrapper} ${iconStyles.icon} ${iconStyles.change} `}
      >
        <Icon size={22}>{children}</Icon>
      </Link>
    </>
  );
};

export default IconWrapper;
