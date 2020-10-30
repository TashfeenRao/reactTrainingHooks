import React, { useContext } from "react";
import { dateContext } from "./Date";

export default function Day() {
  const day = Array.from({ length: 31 }, (_, i) => i + 1);
  const { date, onChange } = useContext(dateContext);
  const currentDay = date.getDate();
  const handleChange = (event) => {
    const newDate = new Date();
    newDate.setDate(parseInt(event.target.value));
    onChange(newDate);
  };
  return (
    <select name="day" value={currentDay} onChange={handleChange}>
      {day.map((d, i) => (
        <option key={i}>{d}</option>
      ))}
    </select>
  );
}
