import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../routes/home";
import Info from "../routes/info";
import Header from "./Header";
import Param1 from "./Param1";
import Param2 from "./Param2";
import "./App.css";
function App() {
  return (
    <>
      <h2>App.jsx</h2>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/param/:id" element={<Param1 />} />
          <Route path="query" element={<Param2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
