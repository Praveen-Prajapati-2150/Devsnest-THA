import React, { useState, useContext } from "react";
import Display from "./Display";
import { UserContext } from "./UserContext";

const UserList = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      {user.map((e) => (
        <Display name={e.name} email={e.email} />
      ))}

      {/* {user.map(e => (
          <h1>{e.name}</h1>
      ))} */}
    </div>
  );
};

export default UserList;
