import Layout from "../components/Layout/Layout";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SectionProduitHomePage from "../components/SectionProduitHomePage/SectionProduitHomePage";

export function DetailProduit() {
  // const navigate = useNavigate();
  const { detailProduit } = useParams();
  const [detailsProduits, setDetailsProduits] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${detailProduit}`)
      .then((response) => {
        const detailProduitData = response.data;
        setDetailsProduits(detailProduitData);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête GET :", error);
      });
  }, [detailProduit]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://dummyjson.com/products/category/${detailsProduits.category}?limit=3`
      )
      .then((response) => {
        const productsData = response.data.products;
        setProducts(productsData);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête GET :", error);
      });
  }, [detailsProduits.category]);

  return (
    <Layout>
      <div className="contain">
        <div className="containImgDetail">
          <div className="imgListe">
            {detailsProduits.images &&
              detailsProduits.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Produit ${index}`}
                  className="imgProduit"
                />
              ))}
          </div>
          <div className="containInfoDetailProduit">
            <div className="description">
              <div className="MarqueDescription">
                <p className="produitNom">{detailsProduits.brand}</p>
                <p className="titreDetailDescription">
                  {detailsProduits.title}
                </p>
              </div>
              <div>
                <p className="priceDescription">{detailsProduits.price}$</p>
              </div>
            </div>
            <div className="titreDescriptionEtDetail">
              <p className="produitNom">Description</p>
              <p className="watchDescription">{detailsProduits.description}</p>
            </div>
            <div className="note">
              <p className="produitNom">Note</p>
              <p className="detailNote">{detailsProduits.rating}</p>
            </div>
          </div>
        </div>

        <SectionProduitHomePage
          cat={detailsProduits.category}
          headline={detailsProduits.category}
          products={products}
        />
      </div>
    </Layout>
  );
}
export default DetailProduit;
