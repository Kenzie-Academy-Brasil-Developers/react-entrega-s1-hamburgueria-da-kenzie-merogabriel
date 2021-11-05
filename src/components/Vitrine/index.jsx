import React from "react";
import ProductCard from "../ProductCard";

function index({ filteredProducts, products, toCart }) {
  return (
    <ul className='products'>
      {filteredProducts
        ? filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              toCart={toCart}
            ></ProductCard>
          ))
        : products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              toCart={toCart}
            ></ProductCard>
          ))}
    </ul>
  );
}

export default index;
