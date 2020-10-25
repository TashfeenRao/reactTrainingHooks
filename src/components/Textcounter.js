import React, { useState } from "react";

const Textcounter = () => {
  const [message, setMessage] = useState("");
  const [check, setCheck] = useState(true);
  const [error, setError] = useState(null);
  const handleTextInput = (e) => {
    if (message.length < 50) {
      setMessage(e.target.value);
      setError(null);
      setCheck(true);
    } else {
      setError("you can't write more then 200");
      setMessage(e.target.value);
      setCheck(false);
    }
  };
  return (
    <div className="box">
      <textarea name="text" cols="50" rows="10" onChange={handleTextInput}>
        {check ? message : ""}
      </textarea>
      {error && <p>{error}</p>}
      <p>
        {message ? message.length : 0}
        <span>/</span>200
      </p>
    </div>
  );
};

export default Textcounter;
