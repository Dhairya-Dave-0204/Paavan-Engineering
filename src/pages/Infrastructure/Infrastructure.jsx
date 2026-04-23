import React from "react";
import {
  InfrastructureHero,
  InfrastructureOverview,
  MachineryShowcase,
  ProcessSection,
} from "../../components/component_index";

function Infrastructure() {
  return (
    <>
      <InfrastructureHero />
      <InfrastructureOverview />
      <MachineryShowcase />
      <ProcessSection />
    </>
  );
}

export default Infrastructure;
