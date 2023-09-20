import { Cart } from "./Cart/Cart";
import { useState } from "react";

export function Header({ setIsCartOpened }: { setIsCartOpened: Function }) {
  return (
    <header className="header">
      <div className="header__left">
        <img src="./img/logo.png" alt="Sneakers logo" width={40} height={40} />
        <div className="header__info">
          <h3>Sneakers Shop</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="header__right">
        <li onClick={() => setIsCartOpened(true)}>
          <img src="./img/cart.png" alt="cart icon" width={18} height={18} />
          <span>5000 тг.</span>
        </li>
        <li>
          <img
            src="./img/favorite.svg"
            alt="favorite icon"
            width={18}
            height={18}
          />
        </li>
        <li>
          <img
            src="./img/profile.png"
            alt="profile icon"
            width={18}
            height={18}
          />
        </li>
      </ul>
    </header>
  );
}
