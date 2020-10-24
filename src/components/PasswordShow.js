import React, { useState } from "react";

const PasswordShow = () => {
  const [type, setType] = useState(false);

  return (
    <div className="box">
      <label htmlFor="password">Password</label>
      <input type={type ? "text" : "password"} />
      <input
        type="checkbox"
        defaultChecked={type}
        onChange={() => setType(!type)}
      ></input>
    </div>
  );
};

export default PasswordShow;
