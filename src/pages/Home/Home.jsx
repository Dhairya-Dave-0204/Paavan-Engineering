import React from "react";
import {
  Hero,
  Capabilities,
  AboutPreview,
  ProductShowcase,
  KeyProducts,
  WhyChooseUs,
} from "../../components/component_index";

function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <AboutPreview />
      <ProductShowcase />
      <KeyProducts />
      <WhyChooseUs />
    </>
  );
}

export default Home;
