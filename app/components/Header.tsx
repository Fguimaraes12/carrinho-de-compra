"use client";

import Link from "next/link";
import { useCart } from "../contexts/cartContext";

function Header() {
  const { cart } = useCart();
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <Link href={"/cart"}>
        carrinho:
        {cart.length > 0 && (
          <span className=" bg-red-500 text-xs rounded-full w-6 h-6 flex items-center justify-center">
            {totalQuantity}
          </span>
        )}
      </Link>
    </div>
  );
}

export default Header;
