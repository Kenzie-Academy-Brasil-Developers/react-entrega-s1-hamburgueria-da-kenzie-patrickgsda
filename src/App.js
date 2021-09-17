import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import FilterProduct from "./components/FilterProduct";
import Hamburguer from "./assets/Hamburguer.jpg";
import Xsalada from "./assets/X-Salada.jpg";
import Xbacon from "./assets/X-Bacon.jpg";
import PatricksB from "./assets/PatricksDay.jpeg";
import Guarana from "./assets/bg.png";
import FantaUva from "./assets/bf.png";
import Pepsi from "./assets/bp.png";
import Coca from "./assets/bc.png";
import Bag from "./assets/sacola.png";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      img: Hamburguer,
      category: "Sanduíches",
      price: 24.99,
    },
    {
      id: 2,
      name: "X-Salada",
      img: Xsalada,
      category: "Sanduíches",
      price: 21.99,
    },
    {
      id: 3,
      name: "X-Bacon",
      img: Xbacon,
      category: "Sanduíches",
      price: 28.99,
    },
    {
      id: 4,
      name: "Patrick's Burguer",
      img: PatricksB,
      category: "Sanduíches",
      price: 32.99,
    },
    {
      id: 5,
      name: "Guaraná",
      img: Guarana,
      category: "Bebidas",
      price: 5.99,
    },
    {
      id: 6,
      name: "Coca",
      img: Coca,
      category: "Bebidas",
      price: 6.99,
    },
    {
      id: 7,
      name: "Fanta Uva",
      img: FantaUva,
      category: "Bebidas",
      price: 4.99,
    },
    {
      id: 8,
      name: "Pepsi",
      img: Pepsi,
      category: "Bebidas",
      price: 6.59,
    },
  ]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [sale, setSale] = useState(false);
  const [saleOk, setSaleOk] = useState(false);

  function Total(product) {
    const reducer = (cartTotal, currentValue) => cartTotal + currentValue;
    setCartTotal(
      currentSale.map((sale) => sale.price).reduce(reducer, product)
    );
  }

  function removeItem(id) {
    let arrRemovedItem = currentSale.filter((item) => item.id !== id);
    let removedItem = currentSale.find((item) => item.id === id);
    console.log(arrRemovedItem);
    console.log(id);
    setCurrentSale([...arrRemovedItem]);
    Total(-removedItem.price);
    if (currentSale.length === 1) {
      hiddenSale();
    }
  }

  function showProducts(productInput) {
    let productInputLower = productInput.toLowerCase(productInput);
    setFilteredProducts(
      products.filter(
        (product) => product.name.toLowerCase() === productInputLower
      )
    );
  }

  function handleClick(productId) {
    const product = products.find((product) => product.id === productId);
    const productSale = currentSale.find((product) => product.id === productId);
    if (!productSale) {
      setCurrentSale([...currentSale, product]);
      Total(product.price);
    }
  }

  function hiddenSale() {
    if (sale === false) {
      setSale(true);
    } else {
      setSale(false);
    }
  }

  function closeAndReset() {
    setFilteredProducts([]);
    setCurrentSale([]);
    setCartTotal(0);
    setSale(false);
    setSaleOk(false);
  }

  return (
    <div className="App">
      <div className="capaTitulo">
        <h1>Patrick's Grill</h1>
      </div>

      <FilterProduct showProducts={showProducts} />

      <header className="App-header">
        <div className="bag">
          {currentSale.length > 0 ? (
            <div onClick={() => hiddenSale()} className="centerBag">
              <img src={Bag} alt="bag"></img>
              <p className="centerBag--c">{currentSale.length}</p>
            </div>
          ) : (
            ""
          )}
          {sale && (
            <MenuContainer
              produtos={currentSale}
              handleClick={handleClick}
              removeItem={removeItem}
              isBag={true}
            />
          )}
          {sale && (
            <div>
              <p className="centerBag--p">
                Total: R$ {parseFloat(cartTotal.toFixed(2))}
              </p>
              <button onClick={() => setSaleOk(true)} className="finallySale">
                Finalizar pedido
              </button>
            </div>
          )}
        </div>
        {filteredProducts.length > 0 ? (
          <MenuContainer
            produtos={filteredProducts}
            handleClick={handleClick}
            isFilter={true}
            isBag={false}
          />
        ) : (
          <MenuContainer
            produtos={products}
            handleClick={handleClick}
            isBag={false}
          />
        )}

        {saleOk && (
          <div className="sale-ok">
            <h1>Pedido finalizado com sucesso!</h1>
            <h2>Agradecemos a sua preferência!</h2>
            <p>Tempo estimado de espera: 30 minutos.</p>
            <button onClick={() => closeAndReset()}>Fechar</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
