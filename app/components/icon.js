import utilStyles from "@styles/utils.module.css";
import styles from "@styles/Home.module.css";
import Link from "next/link";

const Icon = ({ children, alt, size }) => {
  return (
    <div alt={alt} size={size}>
      {children}
    </div>
  );
};

const IconWrapper = ({ children, href }) => {
  return (
    <>
      <Link href={href} className={`${styles.custom} ${utilStyles.icon}`}>
        <Icon size={22}>{children}</Icon>
      </Link>
    </>
  );
};

export default IconWrapper;
