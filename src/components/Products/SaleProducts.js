import AppContainer from "../UI/AppContainer";
import Card from "../UI/Card";
import "./SaleProducts.css";
import Fimg1 from "../../assets/img/products/fimg-1.jpg";
import Fimg2 from "../../assets/img/products/fimg-2.jpg";
import Fimg3 from "../../assets/img/products/fimg-3.jpg";

const SALE_PRODUCTS = [
  {
    id: "sp1",
    title: <h3>select bedding</h3>,
    imageUrl: Fimg1,
  },
  {
    id: "sp2",
    title: <h3>select bath</h3>,
    imageUrl: Fimg2,
  },
  {
    id: "sp3",
    title: <h3>select storage</h3>,
    imageUrl: Fimg3,
  },
];

const SaleProducts = () => {
  const SaleProductsList = SALE_PRODUCTS.map((product) => (
    <Card 
        key={product.id} 
        title={product.title} 
        imageUrl={product.imageUrl} 
    />
  ));

  return (
    <>
      <AppContainer>
        <ul className="cardlist sales-prds-list">{SaleProductsList}</ul>
      </AppContainer>
    </>
  );
};

export default SaleProducts;
