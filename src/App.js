import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Contact from "./components/contactus/ContactUs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
