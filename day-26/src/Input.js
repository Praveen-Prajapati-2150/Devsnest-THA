import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import "./App.css";

const Input = () => {
  const [user, setUser] = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setEmail(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    setUser((prev) => [...prev, { name: name, email: email }]);
    setName("");
    setEmail("");
  };

  return (
    <div className="user">
      <h1>Input</h1>
      <div className="user__input">
      <label htmlFor="">Username</label>
        <input
          type="text"
          value={name}
          onChange={updateName}
          // placeholder="Username"
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          value={email}
          onChange={updatePrice}
        />
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
};

export default Input;
