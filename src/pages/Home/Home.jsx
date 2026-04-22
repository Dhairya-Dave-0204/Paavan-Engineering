import React from "react";
import {
  Hero,
  Capabilities,
  AboutPreview,
  ProductShowcase,
  KeyProducts,
  WhyChooseUs,
  FinalCTA
} from "../../components/component_index";

function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <AboutPreview />
      <ProductShowcase />
      <KeyProducts />
      <FinalCTA />
      <WhyChooseUs />
    </>
  );
}

export default Home;
