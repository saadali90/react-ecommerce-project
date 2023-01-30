import './TopCategories.css';

import Cimg1 from '../../assets/img/categories/cat1.jpg';
import Cimg2 from '../../assets/img/categories/cat2.jpg';
import Cimg3 from '../../assets/img/categories/cat3.jpg';
import Cimg4 from '../../assets/img/categories/cat4.jpg';
import Cimg5 from '../../assets/img/categories/cat5.jpg';
import Cimg6 from '../../assets/img/categories/cat6.jpg';
import Cimg7 from '../../assets/img/categories/cat7.jpg';
import Cimg8 from '../../assets/img/categories/cat8.jpg';
import Cimg9 from '../../assets/img/categories/cat9.jpg';
import Cimg10 from '../../assets/img/categories/cat10.jpg';
import Cimg11 from '../../assets/img/categories/cat11.jpg';
import Cimg12 from '../../assets/img/categories/cat12.jpg';

import Card from '../UI/Card';
import AppContainer from '../UI/AppContainer';

const TOP_CATEGORIES = [
    {
        id: "c1",
        title: <h3>valentine's day</h3>,
        imageUrl: Cimg1,
    },
    {
        id: "c2",
        title: <h3>luggage</h3>,
        imageUrl: Cimg2,
    },
    {
        id: "c3",
        title: <h3>small appliances</h3>,
        imageUrl: Cimg3,
    },
    {
        id: "c4",
        title: <h3>coffee</h3>,
        imageUrl: Cimg4,
    },
    {
        id: "c5",
        title: <h3>air fryers</h3>,
        imageUrl: Cimg5,
    },
    {
        id: "c6",
        title: <h3>tools & gadgets</h3>,
        imageUrl: Cimg6,
    },
    {
        id: "c7",
        title: <h3>water filters</h3>,
        imageUrl: Cimg7,
    },
    {
        id: "c8",
        title: <h3>electric heaters</h3>,
        imageUrl: Cimg8,
    },
    {
        id: "c9",
        title: <h3>blackout curtains</h3>,
        imageUrl: Cimg9,
    },
    {
        id: "c10",
        title: <h3>comforters</h3>,
        imageUrl: Cimg10,
    },
    {
        id: "c11",
        title: <h3>sheets</h3>,
        imageUrl: Cimg11,
    },
    {
        id: "c12",
        title: <h3>heated blankets</h3>,
        imageUrl: Cimg12,
    },

];

const TopCategories = () => {

    const topCategories = TOP_CATEGORIES.map(category => (
        <Card key={category.id} title={category.title} imageUrl={category.imageUrl} />
    ));

    return(
        <AppContainer>
            <h2 className="section-title">top categories</h2>
            <ul className="cardlist top-catgry-list"> {topCategories} </ul>
        </AppContainer>
    );

};

export default TopCategories;