import Link from "../Link/Link";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="headerLink">
        <Link onClick={() => navigate("/")}>Accueil</Link>
        <Link onClick={() => navigate("/produit")}>Produits</Link>
      </div>
    </header>
  );
}
