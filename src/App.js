import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Clicking Me {count}</h1>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default App;
