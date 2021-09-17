import Product from "../Product";
import "./styles.css";

function MenuContainer({ produtos, handleClick, removeItem, isBag, isFilter }) {
  return (
    <div>
      {isFilter ? (
        <div>
          {produtos.map((produto) => (
            <Product
              nome={produto.name}
              img={produto.img}
              preco={produto.price}
              id={produto.id}
              handleClick={handleClick}
              isBag={isBag}
            />
          ))}
        </div>
      ) : (
        <div>
          {isBag ? (
            <div className="menu-items-bag-MenuC">
              {produtos.map((produto) => (
                <Product
                  nome={produto.name}
                  img={produto.img}
                  preco={produto.price}
                  id={produto.id}
                  handleClick={handleClick}
                  isBag={isBag}
                  removeItem={removeItem}
                  category={produto.category}
                />
              ))}
            </div>
          ) : (
            <div className="menu-itemsSb">
              <div className="titulo">
                <h1>Burgers</h1>
              </div>
              <div className="menu-item-burgers">
                {produtos.map((produto) =>
                  produto.category === "Sanduíches" ? (
                    <Product
                      nome={produto.name}
                      img={produto.img}
                      preco={produto.price}
                      id={produto.id}
                      handleClick={handleClick}
                      isBag={isBag}
                    />
                  ) : (
                    ""
                  )
                )}
              </div>
              <div className="titulo">
                <h1>Drinks</h1>
              </div>
              <div className="menu-item-bebidas">
                {produtos.map((produto) =>
                  produto.category === "Bebidas" ? (
                    <Product
                      nome={produto.name}
                      img={produto.img}
                      preco={produto.price}
                      id={produto.id}
                      handleClick={handleClick}
                      isBag={isBag}
                      category={produto.category}
                    />
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MenuContainer;
