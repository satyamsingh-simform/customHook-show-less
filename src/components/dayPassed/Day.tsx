import { differenceInDays, getDaysInYear } from "date-fns";
import { startOfToday } from "date-fns";

export const Day = () => {
  const result = getDaysInYear(new Date());

  const remainigDays = differenceInDays(new Date(2026, 12, 31), new Date());

  return (
    <div className="container">
      {Array.from({ length: result }, (_, index) => (
        <p
          className="day"
          style={{
            backgroundColor: `${365 - index + 1 > remainigDays ? "gray" : "black"}`,
          }}
        ></p>
      ))}
    </div>
  );
};
