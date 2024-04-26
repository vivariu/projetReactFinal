import { useNavigate } from "react-router-dom";

export function Card({ product = {} }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/detail/produit/${product.id}`)}
      style={{ width: "100%" }}
    >
      <div className="produit">
        <img
          className="imgProduit"
          src={product.thumbnail}
          alt={product.title}
        />
        <div className="produitDetails">
          <div className="produitInfo">
            <p className="produitNom">{product.brand}</p>
            <p className="produitDescription">{product.title}</p>
          </div>
          <div>
            <span className="price">{product.price}$</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
