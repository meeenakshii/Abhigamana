import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Base from "./Base";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import React from "react";
import Adoption from "./adoption"; // Import the Adoption component
import Old_Age_Home from "./Old_age_home";
import Donations from "./Donations";
import HomeNurse from "./Home_nurse";
import ShopHere from "./shop_here";

function App() {
  return (
    <Router>
      <Base>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/Old_age_home" element={<Old_Age_Home />} />
          <Route path="/Donations" element={<Donations />} />
          <Route path="/Home_nurse" element={<HomeNurse />} />
          <Route path="/shop_here" element={<ShopHere />} />
        </Routes>
      </Base>
    </Router>
  );
}

export default App;
