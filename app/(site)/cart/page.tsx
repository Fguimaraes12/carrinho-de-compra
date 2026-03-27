"use client";

import { useCart } from "../../contexts/cartContext";
import Link from "next/link";

function CartPage() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();

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
            <div className="pt-3">
              <button
                onClick={() => decrementQuantity(item.id)}
                className="text-2xl cursor-pointer"
              >
                -
              </button>
              <span className="text-yellow-300 pl-2 pr-2 text-2xl">
                {item.quantity}
              </span>
              <button
                onClick={() => incrementQuantity(item.id)}
                className="text-2xl cursor-pointer"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="p-6 text-red-500"
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
