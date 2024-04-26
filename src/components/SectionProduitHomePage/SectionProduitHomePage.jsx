import HeadLine from "../HeadLine/HeadLine";
import Button from "../Button/Button";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";

export function SectionProduitHomePage({ headline, products, cat }) {
  const navigate = useNavigate();

  return (
    <div className="section">
      <div className="headLineButon">
        <HeadLine>{headline}</HeadLine>
        <Button
          onClick={() => navigate(`/categorie/${cat}`)}
          className="boutonHomePage"
        >
          Tout voir
        </Button>
      </div>
      <div className="card">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            onClick={() => navigate(`/detail/produit/${product.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionProduitHomePage;
