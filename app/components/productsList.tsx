import { getProducts } from "../services/productService";
import { Product } from "../types/product";
import ProductsListClient from "./productsListClient";

async function ProductsList() {
  const products: Product[] = await getProducts();

  return (
    <>
      <ProductsListClient initialProducts={products} />
    </>
  );
}
export default ProductsList;
