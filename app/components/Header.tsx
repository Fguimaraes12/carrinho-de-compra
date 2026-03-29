"use client";

import Link from "next/link";
import { useCart } from "../contexts/cartContext";
import { InputSearch } from "./ui/input";
import { CartIcon } from "./ui/cart";

function Header() {
  const { cart } = useCart();
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-white h-15 flex items-center justify-center gap-10">
      <InputSearch />
      <div>
        <Link href={"/cart"} className="text-black">
          <div className="relative w-fit">
            <CartIcon />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalQuantity}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
