import './HealthyProducts.css';

import Himg1 from "../../assets/img/products/himg-1.jpg";
import Himg2 from "../../assets/img/products/himg-2.jpg";
import Himg3 from "../../assets/img/products/himg-3.jpg";
import Himg4 from "../../assets/img/products/himg-4.jpg";
import Card from '../UI/Card';
import AppContainer from '../UI/AppContainer';

const HEALTHY_PRODUCTS = [
    {
        id: "hp1",
        title: <h3><span>save $80</span> on select cookware</h3>,
        imageUrl: Himg1
    },
    {
        id: "hp2",
        title: <h3><span>save up to $50</span> on Ninja® appliances</h3>,
        imageUrl: Himg2
    },
    {
        id: "hp3",
        title: <h3><span>save $50</span> on select KitchenAid® stand mixers</h3>,
        imageUrl: Himg3
    },
    {
        id: "hp4",
        title: <h3><span>save up to 20%</span> on Breville appliances </h3>,
        imageUrl: Himg4
    },

];

const HealthyProducts = () => {
    const healthyProductsList = HEALTHY_PRODUCTS.map(product => (
        <Card key={product.id} title={product.title} imageUrl={product.imageUrl} />
    ));

    return (
        <AppContainer>
            <h2 className="section-title">make it healthy & save!</h2>
            <ul className="cardlist winter-prds-list">{healthyProductsList}</ul>
        </AppContainer>
    );
};

export default HealthyProducts;