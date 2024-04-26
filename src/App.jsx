import "./styles/reset.css";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Categorie from "./Pages/Categorie";
import DetailProduit from "./Pages/DetailProduit";
import Page404 from "./Pages/Page404";
import HomePage from "./Pages/HomePage";
import Header from "./components/Header/Header";
import { Produit } from "./Pages/Produit";
import ScrollToTop from "./components/ScrollToTop/ScrollTopTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/produit" element={<Produit />} />
        <Route path="/categorie/:categorie" element={<Categorie />} />
        <Route
          path="/detail/produit/:detailProduit"
          element={<DetailProduit />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
