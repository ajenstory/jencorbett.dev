import styles from "../styles/Home.module.css";
const Card = ({ children }) => {
  return (
    <>
      <div className={styles.card}>{children}</div>
    </>
  );
};

export default Card;
