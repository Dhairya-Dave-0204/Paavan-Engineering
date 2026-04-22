import React from "react";
import {
  Hero,
  Capabilities,
  AboutPreview,
  ProductShowcase,
  KeyProducts,
} from "../../components/component_index";

function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <AboutPreview />
      <ProductShowcase />
      <KeyProducts />
    </>
  );
}

export default Home;
