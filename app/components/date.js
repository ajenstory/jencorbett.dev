import { parseISO, format } from "date-fns";

const Date = ({ dateString }) => {
  const date = parseISO(dateString);

  return (
    <time dateTime={dateString}>
      {format(date, "'on' EEE LLLL, dd, yyyy 'at' p")}
    </time>
  );
};

const TimeStamp = ({ data }) => {
  const timestamp = JSON.parse(JSON.stringify(data));

  return (
    <>
      <Date dateString={JSON.parse(JSON.stringify(timestamp))} />{" "}
    </>
  );
};

export default { Date, TimeStamp };
