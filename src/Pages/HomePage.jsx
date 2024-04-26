import CardHomePage from "../components/CardHomePage/CardHomePage";
import { SectionProduitHomePage } from "../components/SectionProduitHomePage/SectionProduitHomePage";
import Layout from "../components/Layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

export function HomePage() {
  const [listeProductsWatches, setListeProductsWatches] = useState([]);
  const [listeProductsPhones, setListeProductsPhones] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/mens-watches?limit=3")
      .then((response) => {
        const productsWatches = response.data.products;

        setListeProductsWatches(productsWatches);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête GET :", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/smartphones?limit=3")
      .then((response) => {
        const productsPhones = response.data.products;

        setListeProductsPhones(productsPhones);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête GET :", error);
      });
  }, []);

  return (
    <div>
      <Layout>
        <div className="homePage">
          <CardHomePage />
          <SectionProduitHomePage
            cat="mens-watches"
            headline={"Mens Watch"}
            products={listeProductsWatches}
          />
          <SectionProduitHomePage
            cat="smartphones"
            headline={"Smartphones"}
            products={listeProductsPhones}
          />
        </div>
      </Layout>
    </div>
  );
}

export default HomePage;
