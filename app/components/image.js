const ImageLinkCard = ({ children }) => (
  <>
    {" "}
    {/* outer div container */}
    <div className={`${styles.card} ${styles.center}`}>
      <Link
        aria-label={label}
        href={href}
      >
        {" "}
        {/* inner  div container */}
        <Image>{children}</Image>
      </Link>
    </div>
  </>
);

const ImageCard = ({ children, alt, w, h }) => (
  <>
    {" "}
    {/* outer div container */}
    <div className={`${styles.card} ${styles.center}`}>
      <Image
        height={h}
        width={w}
        alt={alt}
      >
        {" "}
        {/* inner  div container */}
        <Link>
          {/* inner  div container */}
          {children}
        </Link>
      </Image>
    </div>
  </>
);

export default {
  ImageCard,
  ImageLinkCard,
};
