import axios from "axios";
import Product from "./Product";

const GetProductData = async () => {
  const { data } = await axios.get(
    "https://642489959e0a30d92b1e38cc.mockapi.io/offers"
  );
  const products = data.map(
    (product) => new Product(product.ean, product.title)
  );
  return products;
};

export default GetProductData;
