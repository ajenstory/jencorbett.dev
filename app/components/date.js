import { parseISO, format } from "date-fns";

const Date = ({ dateString }) => {
  const date = parseISO(dateString);

  return (
    <time dateTime={dateString}>
      {format(date, "'on' EEE LLLL, dd, yyyy 'at' p")}
    </time>
  );
};

export default Date;
