import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(5);
  const [error, setError] = useState(null);

  const handlePlus = () => {
    setNum(num + 1);
    setError(null);
  };
  const handleMinus = () => {
    if (num > 1) {
      setNum(num - 1);
    } else {
      setError("You can't go further :)");
    }
  };
  return (
    <div>
      <div className="box">
        <button onClick={handlePlus}>Plus</button>
        <p>{num}</p>
        <button onClick={handleMinus}>Minus</button>
      </div>
      <center>
        <p>{error}</p>
      </center>
    </div>
  );
}

export default App;
