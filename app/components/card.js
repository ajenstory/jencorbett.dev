import styles from "@styles/Home.module.css";

const Card = ({ children }) => {
  return (
    <>
      <div className={`${styles.card} ${styles.center}`}>{children}</div>
    </>
  );
};

export default Card;
