import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Home from "src/pages/Home";
import About from "src/pages/About";
import Contact from "src/pages/Contact";
import Overview from "src/pages/work/Overview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work/:projectIdx/overview" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
