import React from "react";
import {
  ProductsHero,
  ProductGrid,
  ProductCategories,
} from "../../components/component_index";

function Products() {
  return (
    <>
      <ProductsHero />
      <ProductCategories />
      <ProductGrid />
    </>
  );
}

export default Products;
