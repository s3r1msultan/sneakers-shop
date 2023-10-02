import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context";

export function Header({ setIsCartOpened }: { setIsCartOpened: Function }) {
  const { cartItems } = useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, { price }) => sum + price, 0);
  return (
    <header className="header">
      <Link to={"/"}>
        <div className="header__left">
          <img
            src="./img/logo.png"
            alt="Sneakers logo"
            width={40}
            height={40}
          />
          <div className="header__info">
            <h3>Sneakers Shop</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="header__right">
        <li onClick={() => setIsCartOpened(true)}>
          <img
            src="./img/cart.png"
            alt="cart icon"
            width={18}
            height={18}
          />
          <span>{totalPrice} тг.</span>
        </li>
        <li>
          <Link to={"/favorites"}>
            <img
              src="./img/favorite.svg"
              alt="favorite icon"
              width={18}
              height={18}
            />
          </Link>
        </li>
        <li>
          <Link to={"/profile"}>
            <img
              src="./img/profile.png"
              alt="profile icon"
              width={18}
              height={18}
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}
