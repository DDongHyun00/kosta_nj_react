// import { useState } from "react";
// import "./App.css";
import Hello from "./Hello";
import { useState } from "react";

function App() {
  const [count, setcount] = useState(0); // 초기값을 0으로 설정
  const [bool, setbool] = useState(true); // bool을 선언, true로 초기값 설정
  const [hello, setHello] = useState("a"); //hello 의 초기값을 'a'로 설정
  return (
    <div>
      <p>{count}</p>
      <p>{bool ? "true" : "false"}</p>
      <p>{hello}</p>
      <button
        onClick={() => {
          setcount((count) => count + 1);
        }}
      >
        Click - count 증가
      </button>
      <button
        onClick={() => {
          setbool((bool) => !bool);
        }}
      >
        Click - true/false
      </button>
      <button
        onClick={() => {
          setHello((hello) => hello + "a");
        }}
      >
        Click - a 추가
      </button>
      <p>내용출력{console.log(`${count}) + ${bool} + ${hello}`)}</p>
    </div>
  );
}

export default App;
// function App() {
//   return (
//     <div>
//       <p>{count} 번 클릭되었습니다.</p>
//       <button onClick={() => setCount((count) => count + 1)}>Click</button>
//     </div>
//   );
// }
