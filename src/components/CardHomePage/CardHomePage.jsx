import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import image from "../../img/incendiaire-incroyablement-belle-fille-manteau-fourrure-ecologique-se-deplace-amusant-photo-belle-dame-vetements-roses-PhotoRoom 1.png";
export function CardHomePage() {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <img className="imageCard" src={image} />
      <div>
        <h1 className="cardText">
          Lets<br></br>Explore<br></br>Unique<br></br>Items.
        </h1>
        <Button onClick={() => navigate("/produit")} className="bouton1">
          Découvrir les produits
        </Button>
      </div>
    </div>
  );
}

export default CardHomePage;
