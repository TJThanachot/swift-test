import "./App.scss";
import Home from "./page/Home";
import Test1 from "./page/Test1";
import Test2 from "./page/Test2";
import Test3 from "./page/Test3";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test1" element={<Test1 />} />
      <Route path="/test2" element={<Test2 />} />
      <Route path="/test3" element={<Test3 />} />
    </Routes>
  );
}

export default App;
