import { differenceInDays, getDaysInYear, getYear, lastDayOfYear } from "date-fns";

export const Day = () => {
  const totalDaysInYear = getDaysInYear(new Date());
  console.log(totalDaysInYear);

  const currentYear= getYear(new Date())

  const remainigDays = differenceInDays(lastDayOfYear(new Date()), new Date());
  console.log(remainigDays);
  const passedDays=totalDaysInYear-remainigDays;

  return (
    <>
    <div className="container">
      {Array.from({ length: totalDaysInYear }, (_, index) => (
        <p key={crypto.randomUUID()}
          className="day"
          style={{
            backgroundColor: `${index+1===passedDays?'green': index < passedDays ? "gray" : "white"}`,
          }}
        ></p>
      ))}
    </div>
    <div className="year-info">
        <div className="year">RemainingDays:{remainigDays}</div>
        <div className="year">Year:{currentYear}</div>
    </div>
    </>
  );
};
