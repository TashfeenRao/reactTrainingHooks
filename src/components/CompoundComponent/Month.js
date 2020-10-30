import React, { useContext } from "react";
import { dateContext } from "./Date";

export default function Month() {
  const month = Array.from({ length: 12 }, (_, i) => i + 1);
  const { date, onChange } = useContext(dateContext);
  const currentMonth = date.getMonth();
  const handleChange = (event) => {
    const newDate = new Date();
    newDate.setMonth(parseInt(event.target.value));
    onChange(newDate);
  };

  return (
    <select name="month" value={currentMonth} onChange={handleChange}>
      {month.map((m, i) => (
        <option key={i}>{m}</option>
      ))}
    </select>
  );
}
