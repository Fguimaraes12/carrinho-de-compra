import { getProducts } from "../services/productService";
import { Product } from "../types/product";

async function ProductsList() {
  const products: Product[] = await getProducts();

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <span>{product.price}</span>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductsList;
