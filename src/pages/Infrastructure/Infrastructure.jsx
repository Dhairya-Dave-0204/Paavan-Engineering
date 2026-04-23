import React from "react";
import {
  InfrastructureHero,
  InfrastructureOverview,
  MachineryShowcase,
  ProcessSection,
  InfrastructureCTA,
} from "../../components/component_index";

function Infrastructure() {
  return (
    <>
      <InfrastructureHero />
      <InfrastructureOverview />
      <MachineryShowcase />
      <ProcessSection />
      <InfrastructureCTA />
    </>
  );
}

export default Infrastructure;
