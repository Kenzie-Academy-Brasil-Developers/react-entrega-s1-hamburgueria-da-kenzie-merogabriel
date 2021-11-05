import React from "react";

function index({ product, toCart }) {
  return (
    <li className="itemVitrine">
      <div className="divImgVitrine">
        <img className="imgVitrine" src={product.img} alt="item" />
      </div>
      <div className="infoVitrine">
        <span>{product.name}</span>
        <p className="cateVitrine">{product.category}</p>
        <p className="precoVitrine">R$ {product.price.toFixed(2).toString()}</p>
        <button className="defaultButton" onClick={() => toCart(product)}>
          Adicionar
        </button>
      </div>
    </li>
  );
}

export default index;
