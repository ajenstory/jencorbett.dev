import { useEffect } from "react";

import TextBlock from "@components/text";
import Link from "next/link";
import indexStyles from "@styles/index.module.css";
export default function ErrorPage({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
  }, [error]);

  return (
    <>
      <div className={`${indexStyles.container}`}>
        <p>Uhoh...🤭</p>
      </div>
      {`${error}` && (
        <small className={``}>
          <Link href="/">
            {" "}
            <p>&larr; Go back</p>
          </Link>
        </small>
      )}
    </>
  );
}
