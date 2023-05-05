import { parseISO, format } from "date-fns";

export const Date = ({ dateString }) => {
  const date = parseISO(dateString);
  console.log(date);
  return (
    <time dateTime={dateString}>
      {format(date, "'on' EEE LLLL, dd, yyyy 'at' p")}
    </time>
  );
};

export const TimeStamp = ({ data }) => {
  const played_at = JSON.parse(JSON.stringify(data));

  return (
    <>
      <Date dateString={JSON.parse(JSON.stringify(played_at))} />{" "}
    </>
  );
};

export default { Date, TimeStamp };
