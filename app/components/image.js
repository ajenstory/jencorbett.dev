const ImageLinkCard = ({ children, label }) => (
  <>
    {" "}
    <div className={`${styles.card} ${styles.center}`}>
      <Link href={href}>
        {" "}
        <Image>{children}</Image>
      </Link>
    </div>
  </>
);

const ImageCard = ({ children, alt, width, height }) => (
  <>
    <div className={`${styles.card} ${styles.center}`}>
      <Image
        height={height}
        width={width}
        alt={alt}
      >
        {" "}
        {children}
      </Image>
    </div>
  </>
);

export default {
  ImageCard,
  ImageLinkCard,
};
