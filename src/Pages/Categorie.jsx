import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card/Card";
import HeadLine from "../components/HeadLine/HeadLine";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export function Categorie() {
  const navigate = useNavigate();
  const { categorie } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${categorie}`)
      .then((response) => {
        const productsData = response.data.products;
        setProducts(productsData);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête GET :", error);
      });
  }, [categorie]);

  return (
    <div>
      <Layout>
        <HeadLine>{categorie}</HeadLine>
        <div className="cardCategorie">
          {products.map((product) => (
            <Card
              key={product.id}
              product={product}
              onClick={() => navigate(`/detail/produit/${product.id}`)}
            />
          ))}
        </div>
      </Layout>
    </div>
  );
}
export default Categorie;
