import { useState } from "react";
import "./App.css";
//import Form from './Form';
import Form2 from "./Form2";

function App() {
  const [count, setCount] = useState(0);
  const up = () => {
    setCount((count) => count + 1);
  };
  const down = () => {
    setCount((count) => count - 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={up}>Up</button>
      <button onClick={down}>Down</button>
      <Form2 />
    </div>
  );
}

export default App;
