import React, { useState } from "react";

const PasswordShow = () => {
  const [type, setType] = useState("password");

  const handleShow = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  return (
    <div className="box">
      <label htmlFor="password">Password</label>
      <input type={type} />
      <input type="checkbox" onClick={handleShow}></input>
    </div>
  );
};

export default PasswordShow;
