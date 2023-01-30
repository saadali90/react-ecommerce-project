import "./WinterProducts.css";

import Wimg1 from "../../assets/img/products/wimg-1.jpg";
import Wimg2 from "../../assets/img/products/wimg-2.jpg";
import Wimg3 from "../../assets/img/products/wimg-3.jpg";
import Wimg4 from "../../assets/img/products/wimg-4.jpg";
import Card from "../UI/Card";
import AppContainer from "../UI/AppContainer";

const WINTER_PRODUCTS = [
  {
    id: "wp1",
    title: <h3><span>save 20%</span> now</h3>,
    imageUrl: Wimg1,
    description: "Offer for new subscribers. Exclusions apply.",
  },
  {
    id: "wp2",
    title: <h3>new members <span> get $15</span> in rewards</h3>,
    imageUrl: Wimg2,
    description: "Enroll for $29/yr & make a purchase thru 1/31 to get this exclusive offer.",
  },
  {
    id: "wp3",
    title: <h3><span>save $120</span> on Home Chef</h3>,
    imageUrl: Wimg3,
    description: "Spend less time cooking with low- or no-prep meals.",
  },
  {
    id: "wp4",
    title: <h3><span>get $100</span> in rewards!</h3>,
    imageUrl: Wimg4,
    description: "When you create a wedding registry 1/1/23–2/25/23. Terms apply.",
  },
];

const WinterProducts = () => {
  const winterProductsList = WINTER_PRODUCTS.map((product) => (
    <Card
      key={product.id}
      title={product.title}
      imageUrl={product.imageUrl}
      description={product.description}
    />
  ));

  return (
    <>
      <AppContainer>
        <h2 className="section-title">winter savings spotlight</h2>
        <ul className="cardlist winter-prds-list">{winterProductsList}</ul>
      </AppContainer>
    </>
  );
};

export default WinterProducts;
