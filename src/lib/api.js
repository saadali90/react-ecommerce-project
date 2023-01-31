const FIREBASE_DOMAIN =
  "https://react-http-f842c-default-rtdb.asia-southeast1.firebasedatabase.app";

export async function getAllProducts() {
  const response = await fetch(`${FIREBASE_DOMAIN}/products.json`);
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "Could not fetch data.");
  }

  const loadedProducts = [];

  for (const key in responseData) {
    loadedProducts.push({
      id: key,
      title: responseData[key].title,
      description: responseData[key].description,
      price: responseData[key].price,
      salePrice: responseData[key].saleprice,
      imageUrl: responseData[key].imgUrl,
    });
  }

  return loadedProducts;
}
