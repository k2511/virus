import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Software from "./pages/Software";
import Brands from "./pages/Brands";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="font-sans">
        {/* ✅ Top bar */}
        <div className="bg-lime-600 text-white text-sm text-center py-2">
          INSTANT DIGITAL DELIVERY | +91 8956786424
        </div>

        {/* ✅ Navbar will always show at the top */}
        <Navbar />

        {/* ✅ Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software" element={<Software />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
