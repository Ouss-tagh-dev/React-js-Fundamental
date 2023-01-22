import React, { useState } from "react";
const Hook = (props) => {
  const [fruteState, setFruteState] = useState({
    fruits: [
      { name: "Mango", weight: "120gm" },
      { name: "Apple", weight: "20gm" },
      { name: "Orange", weight: "60gm" },
    ],
  });

  const clickHandler = () => {
    setFruteState({
      fruits: [
        { name: "Banana", weight: "120gm" },
        { name: "grape", weight: "20gm" },
        { name: "Strawberry", weight: "60gm" },
      ],
    });
  };

  return (
    <div>
      <button onClick={clickHandler}>Change Me</button>
      <h1>Fruite name is {fruteState.fruits[0].name}</h1>
      <h1>Fruite name is {fruteState.fruits[1].name}</h1>
      <h1>Fruite name is {fruteState.fruits[2].name}</h1>
    </div>
  );
};

export default Hook;
