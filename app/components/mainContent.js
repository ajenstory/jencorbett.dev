import layoutStyles from "@components/layout.module.css";
import Link from "next/link";

const MainContent = ({ children, page, home }) => (
  <div className={`${layoutStyles.list} ${layoutStyles.grid}`}>
    <main className={`${layoutStyles.main}`}>
      {home ? (
        <div>
          <ul>
            <li>
              <main>{children}</main>
            </li>
          </ul>
        </div>
      ) : (
        page && (
          <ul className={`${layoutStyles.list} ${layoutStyles.grid}`}>
            <li>
              <main className={`${layoutStyles.page}`}>{children}</main>
            </li>
          </ul>
        )
      )}
    </main>
  </div>
);

export default MainContent;
