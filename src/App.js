import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(5);
  return (
    <div className="box">
      <button onClick={() => setNum(num + 1)}>Plus</button>
      <p>{num}</p>
      <button onClick={() => setNum(num - 1)}>Minus</button>
    </div>
  );
}

export default App;
