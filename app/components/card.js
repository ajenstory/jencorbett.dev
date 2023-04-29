import styles from "@styles/Home.module.css";

const Card = ({ children }) => {
  return (
    <>
      <div className={styles.content}>{children}</div>
    </>
  );
};

export default Card;
