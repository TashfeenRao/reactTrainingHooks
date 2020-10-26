import React, { useEffect, useState } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

const Textcounter = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const truncMess = message.slice(0, 10);
  const handleTextInput = (e) => {
    setMessage(e.target.value);
    if (message.length > 20) {
      setError("limit exceded");
    } else {
      setError(null);
    }
  };
  useTitle("fb" + (truncMess ? truncMess : ""));
  return (
    <>
      <div className="box">
        <textarea
          name="text"
          cols="50"
          rows="10"
          value={message}
          onChange={handleTextInput}
        />
        {error && <p>{error}</p>}
        <p>
          {message ? message.length : 0}
          <span>/</span>200
        </p>
      </div>
    </>
  );
};

export default Textcounter;
