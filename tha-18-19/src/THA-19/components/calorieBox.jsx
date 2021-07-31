import React from "react";
import "../Styles/calorieBox.css";

function CalorieBox(props) {
  // const {food, calorie} = props  // we call it destructuring

  const blogs = props.blogs;
//   const food = props.food;
//   const calorie = props.calorie;
  const handleDelete = props.handleDelete;

  return (
    <div className="food-list">
      {blogs.map((e) => (
        <div className="print-food" key={e.id}>
          <div id="food">{e.food}</div>
          <div id="desc">Total Calorie in that food {e.calorie}.</div>
          <button id="delete" onClick={() => handleDelete(e.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}

export default CalorieBox;
