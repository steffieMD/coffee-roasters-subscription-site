import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import CreatePlan from "./pages/CreatePlan";
import Footer from "./Footer";
import { useState } from "react";
import NoPage from "./pages/NoPage";

function App() {
  const [activeLink, setActiveLink] = useState("/");
  // const activeLink = "/";

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <Router>
      <div>
        <div className="px-6 md:px-10 lg:px-20 flex flex-col items-center h-[100vh] justify-between">
          <Navbar activeLink={activeLink} handleActiveLink={handleActiveLink} />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/createplan" element={<CreatePlan />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
