import React, { useContext } from 'react'
import { checkContext } from './FormPanel';

export default function SignUpButton() {
const {setCheck} = useContext(checkContext)
  return <button onClick={() => setCheck(false)}>Sign Up</button>;
}
