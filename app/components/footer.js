import footerStyles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={`${footerStyles.container}   ${footerStyles.border}`}>
      <footer>© Jen Corbett 2023</footer>{" "}
    </div>
  );
};

export default Footer;
