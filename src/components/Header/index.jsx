import { useState } from "react";

function Header({ filterProducts }) {
  const [filtro, setFiltro] = useState("");

  return (
    <div className="header">
      <div className="logo">
        <span className="burguer">Burguer </span>
        <span className="kenzie">Kenzie</span>
      </div>
      <div className="pesquisar">
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(e) => setFiltro(e.target.value)}
        />
        <button className='defaultButton' onClick={() => filterProducts(filtro)}>Pesquisar</button>
      </div>
    </div>
  );
}

export default Header;
