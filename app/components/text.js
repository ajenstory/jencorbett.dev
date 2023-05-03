import textStyles from "@components/text.module.css";

const TextBlock = ({ children }) => {
  return (
    <>
      <div className={`${textStyles.wrapper}`}>
        <div className={`${textStyles.text}`}>
          <p>{children}</p>
        </div>
      </div>
    </>
  );
};

export default TextBlock;