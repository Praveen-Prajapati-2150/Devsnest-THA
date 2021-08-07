import React from "react";
// import Input from "./Input";

const Display = ({name, email}) => {
    console.log(name);
  return (
    <div className="display">
      <h1><span>Username: </span>{name}</h1>
      <h1><span>Email: </span>{email}</h1>
    </div>
  );
};

export default Display;
