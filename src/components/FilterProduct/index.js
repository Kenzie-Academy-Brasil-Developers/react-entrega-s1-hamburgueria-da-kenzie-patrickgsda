import { useState } from "react";
import "./styles.css";

function FilterProduct({ showProducts }) {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="menu-container">
      <input
        type="text"
        name="text"
        placeholder="Hamburguer"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button className="button-filter" onClick={() => showProducts(userInput)}>
        Pesquisar
      </button>
    </div>
  );
}

export default FilterProduct;
