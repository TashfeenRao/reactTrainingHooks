import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: false,
  errors: null,
  data: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SignUp_Started":
      return { ...state, loading: true };
    case "SignUp_Success":
      return { ...state, loading: false, data: "I;m the user" };
    case "SignUp_Failed":
      return { ...state, loading: false, errors: action.error };

    default:
      return state;
  }
};

export default function Reducer1() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "SignUp_Started" });

    return (
      setTimeout(() => {
        dispatch({ type: "SignUp_Success" });
      }, 2000),
      setTimeout(() => {
        dispatch({ type: "SignUp_Failed", error: "could not find user" });
      }, 4000)
    );
  }, []);

  return (
    <div>
      <h1>{state && state.data} </h1>
      <h1>{state && state.errors} </h1>
    </div>
  );
}
