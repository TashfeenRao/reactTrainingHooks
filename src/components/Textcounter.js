import React, { useState } from 'react';

const Textcounter = () => {
  const [message, setMessage] = useState(null);
  return (
    <div className="box">
    <textarea name="text" cols="50" rows="10">
    </textarea>
    <p>0<span>/</span>200</p>
    </div>
  );
}

export default Textcounter;
