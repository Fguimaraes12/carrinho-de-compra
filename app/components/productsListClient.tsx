"use client";

import { useCart } from "../contexts/cartContext";
import { Product } from "../types/product";

type ProductsProps = {
  initialProducts: Product[];
};

function ProductsListClient({ initialProducts }: ProductsProps) {
  const { cart, addToCart } = useCart();

  console.log(cart);

  return (
    <div>
      <ul>
        {initialProducts.map((product) => (
          <li
            key={product.id}
            className="border-2 border-blue-500 rounded-lg p-4 m-4"
          >
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <span>{product.price}</span>
            <button
              className="border-2 border-green-300 rounded-2xl p-2 ml-2 cursor-pointer"
              onClick={() => addToCart(product)}
            >
              Adicionar carrinho
            </button>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductsListClient;
