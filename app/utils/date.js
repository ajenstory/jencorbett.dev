import { parseISO, format } from "date-fns";

export function Date({ dateString }) {
  const date = parseISO(dateString);

  return (
    <time dateTime={dateString}>{format(date, "'on' EEE LLLL, dd, yyyy")}</time>
  );
}

export function Time({ dateString }) {
  const time = parseISO(dateString);

  return <time dateTime={dateString}>{format(time, " 'at' p")}</time>;
}

export default { Date, Time };
