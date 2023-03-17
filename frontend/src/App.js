import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Home from "src/pages/Home";
import About from "src/pages/About";
import Contact from "src/pages/Contact";
import Overview from "src/pages/work/Overview";
import Tool from "src/pages/work/Tool";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work/:projectIdx/overview" element={<Overview />} />
        <Route path="/work/:projectIdx/tool" element={<Tool />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
