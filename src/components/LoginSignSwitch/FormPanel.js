import React, { createContext, useState } from "react";
import FormContainer from "./FormContainer";
import Login from "./Login";
import LoginButton from "./LoginButton";
import SignUp from "./SignUp";
import SignUpButton from "./SignUpButton";
import Tab from "./Tab";
import TabList from "./TabList";
export const checkContext = createContext();
export default function FormPanel(buttonPosition = "top") {
  const [check, setCheck] = useState(true);
  return (
    <checkContext.Provider value={{ check, setCheck }}>
      <Tab>
        <TabList>
          <LoginButton />
          <SignUpButton />
        </TabList>
        <FormContainer>
          <Login />
          <SignUp />
        </FormContainer>
      </Tab>
    </checkContext.Provider>
  );
}
