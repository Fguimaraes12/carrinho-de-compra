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
    <div className="flex justify-center bg-gray-100">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
        {initialProducts.map((product) => (
          <li
            key={product.id}
            className="bg-white shadow-sm hover:shadow-md transition p-4 flex flex-col"
          >
            <img
              src={product.images?.[0] || "/fallback.png"}
              alt={product.title}
              className="w-full h-102 object-cover mb-4"
            />

            <h1 className="text-base font-medium text-black mb-2 line-clamp-2">
              {product.title}
            </h1>

            <span className="text-lg font-semibold text-black mb-4">
              R$ {product.price}
            </span>

            <button
              className="mt-auto bg-black text-white py-2 hover:bg-zinc-800 transition cursor-pointer"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductsListClient;
