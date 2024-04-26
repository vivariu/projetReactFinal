import { useNavigate } from "react-router-dom";
import { ButtonPageProduit } from "../components/ButtonPageProduit/ButtonPageProduit";
import Card from "../components/Card/Card";
import HeadLine from "../components/HeadLine/HeadLine";
import Layout from "../components/Layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

export function Produit() {
  const navigate = useNavigate();
  const [listeCategories, setListeCategories] = useState([]);
  const [listeProducts, setListeProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        const categories = response.data;
        setListeCategories(categories);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête GET :", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=0")
      .then((response) => {
        const products = response.data.products;
        setListeProducts(products);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête GET :", error);
      });
  }, []);

  return (
    <Layout>
      <div className="titreBoutonProduit">
        <HeadLine>Produits</HeadLine>
        <div className="listeProduit">
          <div className="listeBoutonPageProduit">
            <ButtonPageProduit boutonPageProduit={"Tous"} />
            {listeCategories.map((categorie, index) => (
              <ButtonPageProduit
                key={index}
                boutonPageProduit={categorie}
                onClick={() => navigate(`/category/${categorie}`)}
              />
            ))}
          </div>
          <div className="cardandcard">
            <div className="cardListe">
              {listeProducts.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
