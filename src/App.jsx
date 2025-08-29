import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Software from "./pages/Software";
// import Brands from "./pages/Brands";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NewSectionDetails from "./pages/NewSectionDetails";

function App() {
  const [activePanel, setActivePanel] = useState(null);

  return (
    
    <Router>
      <Topbar setActivePanel={setActivePanel} />
      <Navbar activePanel={activePanel} setActivePanel={setActivePanel} />
          {/* <div> virus one </div> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/software" element={<Software />} />
        {/* <Route path="/brands" element={<Brands />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/new-section-details/:id" element={<NewSectionDetails />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
