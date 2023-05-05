const LinkCard = ({ children, href, label }) => (
  <>
    {" "}
    <div>
      <Link href={href}> {children}</Link>
    </div>
  </>
);

export default LinkCard;
