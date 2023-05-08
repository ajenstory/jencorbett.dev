export const Post = ({ children }) => (
  <div className={`${inter.className} ${layoutStyles.post}`}>
    <Meta />
    <ThemeSwitch /> <NavBar />
    <Header />
    <article>{children}</article>
  </div>
);

export default Post;
