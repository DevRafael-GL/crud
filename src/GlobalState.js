import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const db_users = JSON.parse(window.localStorage.getItem("users"));

const initialState = {
  users: db_users,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider context
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  console.log(state.users.map((user) => user));

  useEffect(() => {
    window.localStorage.setItem(
      "users",
      JSON.stringify(state.users.map((user) => user))
    );
  }, [state]);

  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };

  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ users: state.users, removeUser, addUser, editUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
