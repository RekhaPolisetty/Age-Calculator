import React, { useState } from 'react'
import "./AgeCAlculator.css";
import moment from "moment";

const AgeCalculator = () => {
    const [dob, setDob] = useState({ date: "", month: "", year: "" });
  const [diff, setDiff] = useState({ date: "", month: "", year: "" });
  const onchangehandelar = (e) => {
    const { name, value } = e.target;
    setDob((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  const handlesubmit = () => {
    const { date, month, year } = dob;
    let dateNow = new Date();

    // if (
    //   date.length > 0 &&
    //   date <= 31 &&
    //   month.length > 0 &&
    //   month <= 12 &&
    //   year.length === 4 &&
    //   year <= presentYear
    // ) {

    const isDateValid = moment(
      year + "-" + month + "-" + date,
      "YYYY-MM-DD"
    ).isValid();
    const isYearproper = dateNow.getFullYear() >= year;
    if (isDateValid && isYearproper) {
      const dob = moment(year + "-" + month + "-" + date, "YYYY-MM-DD");
      const currentDate = moment();

      const duration = moment.duration(currentDate.diff(dob));

      setDiff({
        date: duration.days(),
        month: duration.months(),
        year: duration.years(),
      });
    } else {
      alert("Please enter proper date");
    }
  };

  return (
    <div className="main">
      <div className="sub">
        <div className="header">Age Calcluator</div>
        <div className="dob_ui">
          <div className="text_input_class">
            <span>Date</span>
            <input
              onChange={onchangehandelar}
              type="number"
              name="date"
              id="date"
            />
          </div>
          <div className="text_input_class">
            <span>Month</span>
            <input
              onChange={onchangehandelar}
              type="number"
              name="month"
              id="month"
            />
          </div>
          <div className="text_input_class">
            <span>Year</span>
            <input
              onChange={onchangehandelar}
              type="number"
              name="year"
              id="year"
            />
          </div>
        </div>
        <button onClick={handlesubmit}>Submit</button>
        <div className="final_text">{`your age is ${diff.date} days, ${diff.month} months and ${diff.year} years`}</div>
      </div>
    </div>
  );
}

export default AgeCalculator