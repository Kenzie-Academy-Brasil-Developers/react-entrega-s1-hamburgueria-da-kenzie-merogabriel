import { useState } from "react";

import Header from "./components/Header";
import Vitrine from "./components/Vitrine";
import Carrinho from "./components/Carrinho";

import "./components/Css/reset.css";
import "./components/Css/styles.css";

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Brocadão",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Milkshake",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState("");
  const [carrinho, setCarrinho] = useState([]);

  function filterProducts(search) {
    setFilteredProducts(
      products.filter((produto) => {
        return (
          produto.category.toLowerCase().replace(/[^a-zA-Zs]/g, "") ===
          search.toLowerCase().replace(/[^a-zA-Zs]/g, "")
        );
      })
    );
  }

  function toCart(product) {
    setCarrinho([...carrinho, product]);
    console.log(carrinho);
  }

  return (
    <div className="App">
      <Header products={products} filterProducts={filterProducts}></Header>
      <div className="menuContainer">
        <Vitrine
          products={products}
          filteredProducts={filteredProducts}
          toCart={toCart}
        ></Vitrine>
        <Carrinho carrinho={carrinho} setCarrinho={setCarrinho}></Carrinho>
      </div>
    </div>
  );
}

export default App;
