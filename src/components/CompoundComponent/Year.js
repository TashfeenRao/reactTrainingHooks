import React, { useContext } from "react";
import { dateContext } from "./Date";

export default function Year() {
  const year = Array.from({ length: 61 }, (_, i) => 1960 + i);
  const { date, onChange } = useContext(dateContext);
  const currentYear = date.getFullYear();
  const handleChange = (event) => {
    const newDate = new Date();
    newDate.setYear(parseInt(event.target.value));
    onChange(newDate);
  };
  return (
    <select name="year" value={currentYear} onChange={handleChange}>
      {year.map((y, i) => (
        <option key={i}>{y}</option>
      ))}
    </select>
  );
}
