import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import CreatePlan from "./pages/CreatePlan";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/createplan" element={<CreatePlan />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
