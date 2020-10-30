import React, { createContext, useState } from "react";
import Day from "./Day";
import Month from "./Month";
import WrapperDate from "./WrapperDate";
import Year from "./Year";

export const dateContext = createContext()
export default function DateComponent() {
const [date,setDate] = useState(new Date())
const onChange = (event) => {
  setDate(event)
}
  return (
    <div className="box">
      <h1>I am date</h1>
      <dateContext.Provider value={{ date, onChange }}>
        <WrapperDate>
          <Day />/
          <Month />/
          <Year />
        </WrapperDate>
      </dateContext.Provider>
    </div>
  );
}
