import React, { useState } from "react";
import "../styles/Box.css";
// import InputEmoji from "react-input-emoji";
// import "emoji-mart/css/emoji-mart.css";
// import { Picker } from "emoji-mart";

export default function Box() {
  const [update, setUpdate] = useState("Pizza 🍕");
  const [updateCal, setUpdateCal] = useState("3000");
  const [showItem, setItem] = useState("empty");

  function change(e) {
    setUpdate(e.target.value);
    console.log(e.target.value);
  }

  const changeCal = (e) => {
    setUpdateCal(e.target.value);
    console.log(e.target.value);
  };

  const show = (e) => {
    e.preventDefault(); 
    setItem(update);
    setItem(updateCal);
  };



  return (
    <>
      <className className="mainDiv">
        <input
          onChange={change}
          className="same"
          id="input1"
          type="text"
          value={update}
          placeholder="Food Name"
        />
        <input
          onChange={changeCal}
          className="same"
          id="input2"
          type="number"
          value={updateCal}
          placeholder="Food Calorie"
        />
        <button onChange={show} className="same" id="click">
          Add Item
        </button>

        <div className="showTodo">
            <h1>{update} <br />{updateCal}</h1>
            <h1>{showItem}</h1>
        </div>

        
      </className>
    </>
  );
}
