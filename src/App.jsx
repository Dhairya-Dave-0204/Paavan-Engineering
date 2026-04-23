import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, About, Contact, Products } from "./pages/page_index";
import { Navbar, Footer } from "./components/component_index";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
