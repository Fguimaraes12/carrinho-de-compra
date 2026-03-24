"use client";

import Link from "next/link";
import { useCart } from "../contexts/cartContext";

function Header() {
  const { cart } = useCart();
  return (
    <div>
      <Link href={"/cart"}>
        carrinho: {cart.length}
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full w-6 h-6 flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </Link>
    </div>
  );
}

export default Header;
