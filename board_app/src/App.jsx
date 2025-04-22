import { useState, useEffect } from "react";
import "./App.css";
import MyButton from "./MyButton";
import MyTable from "./MyTable";
import Image from "./Image";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const onChange = (e) => {
    setName(e.target.value);
  };
  const toggleVisible = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    console.log("딱 한번만 호출됩니다.DidMount 를 대체");
  }, []); // component가 DidMount 될 때 딱 한번만 호출
  useEffect(() => {
    console.log("count 또는 name 값이 변경되었습니다.DidUpdate 를 대체");
  }, [count]);
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <MyButton />
        <MyTable />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <input type="text" value={name} onChange={onChange} />

        {visible ? <Image /> : null}
        <button onClick={toggleVisible}>
          이미지 {visible ? "hide" : "show"}{" "}
        </button>
      </div>
    </>
  );
}

export default App;
