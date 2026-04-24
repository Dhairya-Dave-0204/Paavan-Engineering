import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Products,
  ProductDetail,
  Infrastructure,
  WhatsAppButton
} from "./pages/page_index";
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
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
