import React, { useContext } from 'react'
import { checkContext } from './FormPanel';

export default function FormContainer({children}) {
const {check} = useContext(checkContext);
  return (
    <div>
      {check ? children[0] : children[1]}
    </div>
  )
}
