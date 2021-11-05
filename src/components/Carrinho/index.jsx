import React from "react";
import CarrinhoCard from "../CarrinhoCard";
import CarrinhoVazio from "../CarrinhoVazio";

function index({ carrinho, setCarrinho }) {
  function filterCarrinho(cart) {
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    return cart.filter(onlyUnique);
  }
  function removeItem(produto) {
    setCarrinho(carrinho.filter((item) => item !== produto));
  }
  function removeCart() {
    setCarrinho([]);
  }

  return (
    <div className="carrinho">
      <div className="nomeCarrinho">Carrinho de compras</div>
      <div className="itensCarrinho">
        {carrinho !== [] ? (
          <div>
            {filterCarrinho(carrinho).map((product, index) => (
              <CarrinhoCard
                key={index}
                product={product}
                carrinho={carrinho}
                removeItem={removeItem}
              ></CarrinhoCard>
            ))}
            <p className='precoCarrinho'>
              Total R$
              {carrinho
                .reduce((acc, valor) => acc + valor.price, 0)
                .toFixed(2)
                .toString()
                .replace(".", ",")}
            </p>
            <button className='' onClick={() => removeCart}>Remover todos</button>
          </div>
        ) : (
          <CarrinhoVazio></CarrinhoVazio>
        )}
      </div>
    </div>
  );
}

export default index;
