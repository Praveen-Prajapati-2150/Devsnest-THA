import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {

  const [user, setUser] = useState([
    {
      name: "praveen",
      email: "prsmart@gmail.com",
    },
    {
      name: "prit",
      email: "hrsmart@gmail.com",
    },
  ]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
