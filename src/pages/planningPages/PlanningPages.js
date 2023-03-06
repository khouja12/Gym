import React, { useState } from "react";
import FooterBottom from "../../components/footer/FooterBottom";
import LandBar from "../../components/LandingPagesComponents/LandBar";
import "./PlanningPages.css";

const PlanningPages = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const weeksInMonth = [
    [
      <div>
        <p>hello</p>
      </div>,
      <div>
        <p>hello</p>
      </div>,
      3,
      4,
      5,
      6,
      7,
    ],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, null, null, null, null],
  ];

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div>
      <LandBar />
      <div className="fullC">
        <div className="calendar">
          {days.map((day) => (
            <div className="calendar__day" key={day}>
              {day}
            </div>
          ))}
          {weeksInMonth.map((week, i) => (
            <React.Fragment key={i}>
              {week.map((day, j) => (
                <div
                  className={`calendar__day ${
                    day === selectedDay ? "calendar__day--selected" : ""
                  }`}
                  key={`${i}-${j}`}
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <FooterBottom/>
    </div>
  );
};

export default PlanningPages;
