import { parseISO, format } from "date-fns";

export function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d yyyy")}</time>;
}

export function Time({ dateString }) {
  const time = parseISO(dateString);
  return <time dateTime={dateString}>{format(time, "p")}</time>;
}

export default { Date, Time };
