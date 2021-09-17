import "./styles.css";

function Product({
  category,
  nome,
  img,
  preco,
  id,
  handleClick,
  removeItem,
  isBag,
}) {
  return (
    <div key={id} className="menu-items-BagEProds">
      {isBag ? (
        <div>
          {category === "Sanduíches" ? (
            <div id="menu-items-bag">
              <p>{nome}</p>
              <p>
                <img className="imgsBag-burgers" src={img} alt={id}></img>
              </p>
              <p>R$ {preco}</p>
              <button
                className="removeItems-burgers"
                onClick={() => removeItem(id)}
              >
                X
              </button>
            </div>
          ) : (
            <div id="menu-items-bag">
              <p>{nome}</p>
              <p>
                <img className="imgsBag-drinks" src={img} alt={id}></img>
              </p>
              <p>R$ {preco}</p>
              <button
                className="removeItems-drinks"
                onClick={() => removeItem(id)}
              >
                X
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="menu-items-prods">
          <p>{nome}</p>
          <p>
            <img className="imgs" src={img} alt={id}></img>
          </p>
          <p>R$ {preco}</p>
          <button onClick={() => handleClick(id)}>Adicionar</button>
        </div>
      )}
    </div>
  );
}

export default Product;
