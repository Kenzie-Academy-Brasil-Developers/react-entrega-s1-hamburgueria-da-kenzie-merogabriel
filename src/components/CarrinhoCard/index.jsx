import React from "react";

function index({ product, carrinho, removeItem }) {
  return (
    <div className="cardCarrinho">
      <img src={product.img} alt="item" />
      <div className='nomesCarrinho'>
        <span>{product.name}</span>
        <p>{product.category}</p>
      </div>

      <button className='removeItem' onClick={() => removeItem(product)}>Remover</button>
    </div>
  );
}

export default index;
