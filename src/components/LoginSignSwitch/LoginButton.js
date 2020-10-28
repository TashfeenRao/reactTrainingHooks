import React, { useContext } from 'react'
import { checkContext } from './FormPanel';

export default function LoginButton() {
const {setCheck} = useContext(checkContext);
  return <button onClick={() => setCheck(true)}>Login</button>;
}
