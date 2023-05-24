import { useState, useEffect } from "react";

const CurrentTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <p>
      {date.toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles",
      })} PST
    </p>
  );
};

export default CurrentTime;