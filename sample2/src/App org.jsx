import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count} 번 클릭되었습니다.</p>
      <button onClick={() => setCount((count) => count + 1)}>Click</button>
    </div>
  );
}

export default App;
