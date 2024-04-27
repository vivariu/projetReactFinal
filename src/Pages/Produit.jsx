import { ButtonPageProduit } from "../components/ButtonPageProduit/ButtonPageProduit";
import Card from "../components/Card/Card";
import HeadLine from "../components/HeadLine/HeadLine";
import Layout from "../components/Layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

export function Produit() {
  const [listeCategories, setListeCategories] = useState([]);
  const [listeProducts, setListeProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tous");

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
      .get("https://dummyjson.com/products?limit=100")
      .then((response) => {
        const products = response.data.products;
        setListeProducts(products);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête GET :", error);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  let filteredProducts = [];

  if (selectedCategory === "Tous") {
    filteredProducts = listeProducts;
  } else {
    filteredProducts = listeProducts.filter(
      (product) => product.category === selectedCategory
    );
  }

  return (
    <Layout>
      <div className="titreBoutonProduit">
        <HeadLine>Produits</HeadLine>
        <div className="listeProduit">
          <div className="listeBoutonPageProduit">
            <ButtonPageProduit
              boutonPageProduit={"Tous"}
              onClick={() => handleCategoryClick("Tous")}
            />
            {listeCategories.map((categorie, index) => (
              <ButtonPageProduit
                key={index}
                boutonPageProduit={categorie}
                onClick={() => handleCategoryClick(categorie)}
              />
            ))}
          </div>
          <div className="cardandcard">
            <div className="cardListe">
              {filteredProducts.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
