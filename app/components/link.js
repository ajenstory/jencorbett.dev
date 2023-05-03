const LinkCard = ({ children, href, label }) => (
  <>
    {" "}
    <div>
      <Link
        aria-label={label}
        href={href}
      >
        {" "}
        {children}
      </Link>
    </div>
  </>
);

export default LinkCard;
