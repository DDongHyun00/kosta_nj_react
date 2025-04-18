// import { useState } from "react";
// import "./App.css";
import Hello from "./Hello";

export default function App() {
  const value = "홍길동";
  const style = {
    backgroundColor: "yellow",
  };
  return (
    <>
      <h1 style={style}>hello, {value}</h1>
      <p>안녕하세요</p>
      <Hello />
      <Hello />
      <Hello />
    </>
  );
}

export function App2() {
  return <></>;
}

// function App() {
//   return (
//     <div>
//       <p>{count} 번 클릭되었습니다.</p>
//       <button onClick={() => setCount((count) => count + 1)}>Click</button>
//     </div>
//   );
// }
