import { useEffect } from "react";
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Uhoh...🤭</p>
      <Link
        className={``}
        href="/"
      >
        ← Back to home{" "}
      </Link>
    </div>
  );
}
