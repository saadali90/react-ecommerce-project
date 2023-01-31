import { useEffect } from "react";
/*import Prd1 from "../../assets/img/products/prd-1.jpg";
import Prd2 from "../../assets/img/products/prd-2.jpg";
import Prd3 from "../../assets/img/products/prd-3.jpg";
import Prd4 from "../../assets/img/products/prd-4.jpg";
import Prd5 from "../../assets/img/products/prd-5.jpg";
import Prd6 from "../../assets/img/products/prd-6.jpg";
import Prd7 from "../../assets/img/products/prd-7.jpg";
import Prd8 from "../../assets/img/products/prd-8.jpg";*/

const ProductsData = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://react-http-f842c-default-rtdb.asia-southeast1.firebasedatabase.app/products.json");
    
      if (!response.ok) {
        throw new Error("Something went wrong!");
        // if above is true, lines below won't executes
      }

      const responseData = await response.json();

      console.log("response Data =>", responseData);

       // In firebase we have products objects with Id's, but we want in Array form so:
      const loadedProducts = [];

      for (const key in responseData) {
        loadedProducts.push({
          id: key,
          title: responseData[key].title,
          description: responseData[key].description,
          price: responseData[key].price,
          salePrice: responseData[key].saleprice,
          imageUrl: responseData[key].imgUrl
        });
      }

      console.log("loadedMeals =>", loadedProducts);

    };

    fetchProducts().catch((error) => {
      return(error.message);
    });

    
  }, []);
};

/*
const productsData = [
  {
    id: "prd1",
    title:
      "Studio 3B™ 3-Piece King Pinstripe Duvet Cover Set in Coconut Milk/Navy",
    price: 120,
    salePrice: 51,
    prdImage: Prd1,
  },
  {
    id: "prd2",
    title:
      "UGG® Avery 3-Piece Reversible Full/Queen Comforter Set in Seal Grey",
    price: 120,
    salePrice: 69,
    prdImage: Prd2,
  },
  {
    id: "prd3",
    title:
      "Neato® D8 Intelligent Robot Vacuum Wi-Fi Connected with LIDAR Navigation in Indigo",
    price: 399.99,
    salePrice: 199.99,
    prdImage: Prd6,
  },
  {
    id: "prd4",
    title: "Studio 3B™ 17-Inch Round Bar Cart in Black",
    price: 120,
    salePrice: 60,
    prdImage: Prd5,
  },
  {
    id: "prd5",
    title:
      "Nestwell® Pima Cotton Sateen 500-Thread-Count Queen Sheet Set in Bright White",
    price: 70,
    salePrice: 53.99,
    prdImage: Prd3,
  },
  {
    id: "prd6",
    title:
      "Nestwell™ Down Alternative Density Firm Support Standard/Queen Bed Pillow",
    price: 15,
    salePrice: 20,
    prdImage: Prd4,
  },
  {
    id: "prd7",
    title: "Nestwell™ Cotton Comfort Waterproof Queen Mattress Pad",
    price: 75,
    salePrice: 60,
    prdImage: Prd7,
  },
  {
    id: "prd8",
    title:
      "Nestwell™ Egyptian Cotton 625-Thread-Count Standard Pillowcases in Bright White (Set of 2)",
    price: 40,
    salePrice: 32,
    prdImage: Prd8,
  },
];
*/

export default ProductsData;
