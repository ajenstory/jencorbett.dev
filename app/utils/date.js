import { parseISO, format } from "date-fns";

export function Date({ dateString }) {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, "LLLL d yyyy")}</time>;
}

export function Time({ dateString }) {
  const time = parseISO(dateString);

  return <time dateTime={dateString}>{format(time, "hh:mm:ss")}</time>;
}

export function CurrentDate({ dateString }) {
  const currentDate = new Date();

  return (
    <time dateTime={dateString}>{format(currentDate, "LLLL d yyyy")}</time>
  );
}

export function CurrentTime({ dateString }) {
  const currentTime = new Date();

  return <time dateTime={dateString}>{format(currentTime, "hh:mm:ss")}</time>;
}

export default { Date, Time, CurrentDate, CurrentTime };
