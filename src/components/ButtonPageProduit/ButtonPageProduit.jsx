export function ButtonPageProduit({ boutonPageProduit, onClick }) {
  return (
    <button className="BoutonPageProduit" onClick={onClick}>
      {boutonPageProduit}
    </button>
  );
}

export default ButtonPageProduit;
