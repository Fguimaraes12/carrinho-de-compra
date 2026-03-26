"use client";

import { useCart } from "../../contexts/cartContext";
import Link from "next/link";

function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <Link href="/">Voltar</Link> <br />
      <ul>
        {cart.map((item) => (
          <li
            key={item.id}
            className="border-2 border-green-500 rounded-lg p-4 m-4"
          >
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <span>{item.price}</span>
            <span className="text-yellow-300">{item.quantity}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="p-2 text-red-500"
            >
              Remover Item
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartPage;
