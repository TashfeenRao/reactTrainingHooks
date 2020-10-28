import React, { createContext, useState } from "react";
import FormContainer from "./LoginSignSwitch/FormContainer";
import Login from "./LoginSignSwitch/Login";
import LoginButton from "./LoginSignSwitch/LoginButton";
import SignUp from "./LoginSignSwitch/SignUp";
import SignUpButton from "./LoginSignSwitch/SignUpButton";
import Tab from "./LoginSignSwitch/Tab";
import TabList from "./LoginSignSwitch/TabList";
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
