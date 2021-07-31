import React, { useState } from "react";
import "../Styles/list.css";
import CalorieBox from "./calorieBox";

function List() {
  const [blogs, setBlogs] = useState([
    {
      food: "Pizza 🍕",
      calorie: 59,
      id: 1,
    },
    {
      food: "Burger 🍔",
      calorie: 500,
      id: 2,
    },
    {
      food: "Coffe ☕",
      calorie: 59,
      id: 3,
    },
    {
      food: "French Fries 🍟",
      calorie: 59,
      id: 4,
    },
    {
      food: "Beer 🍻",
      calorie: 200,
      id: 5,
    },
    {
      food: "Shampain 🍾",
      calorie: 179,
      id: 6,
    },
    {
      food: "Potty 💩",
      calorie: 15,
      id: 7,
    },
    {
      food: "Noodles 🍜",
      calorie: 220,
      id: 8,
    },
    {
      food: "Coding 💻",
      calorie: 0,
      id: 9,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((e) => e.id !== id);
    setBlogs(newBlogs)
  }

  return (
    <>
      <div className="container">
        <CalorieBox blogs={blogs}
         handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default List;
