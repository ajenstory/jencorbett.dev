import { parseISO, format } from "date-fns";

export function Date({ dateString }) {
  const date = parseISO(dateString);
  console.log(date);
  return <time dateTime={dateString}>{format(date, "LLLL d yyyy")}</time>;
}

export function Time({ dateString }) {
  const time = parseISO(dateString);
  console.log(time);
  return <time dateTime={dateString}>{format(time, "hh:mm:ss")}</time>;
}

export function CurrentDate({ dateString }) {
  const currentDate = new Date();
  console.log(currentDate);
  return (
    <time dateTime={dateString}>{format(currentDate, "LLLL d yyyy")}</time>
  );
}

export function CurrentTime({ dateString }) {
  const currentTime = new Date();
  console.log(currentTime);
  return <time dateTime={dateString}>{format(currentTime, "hh:mm:ss")}</time>;
}

export default { Date, Time, CurrentDate, CurrentTime };
