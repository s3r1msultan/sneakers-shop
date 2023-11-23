import { useContext } from "react";
import { AppContext } from "../../context";
import style from "./Cart.module.scss";

interface CartProps {
  onClickRemove: Function;
  setIsCartOpened: Function;
}

export function Cart({ onClickRemove, setIsCartOpened }: CartProps) {
  const { cartItems, discount } = useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, { price }) => sum + price, 0);
  return (
    <div className={style.overlay}>
      <div className={style.cart}>
        <div>
          <h2>Корзина</h2>
          <button onClick={() => setIsCartOpened(false)}>
            <img
              src="./img/cancel.svg"
              alt="close icon"
            />
          </button>
        </div>
        <div className={style.cart__items}>
          {cartItems.map((cartItem, index) => {
            return (
              <div
                className={style.cart__item}
                key={cartItem.name + cartItem.price + index}
              >
                <img
                  src={cartItem.imageURL}
                  alt="sneakers"
                  width={70}
                  height={70}
                />
                <div>
                  <p>{cartItem.name}</p>
                  <b>{cartItem.price} тг.</b>
                </div>
                <button
                  onClick={() => {
                    onClickRemove(cartItem);
                  }}
                >
                  <img
                    src="./img/cancel.svg"
                    alt="cancel"
                    width={32}
                    height={32}
                  />
                </button>
              </div>
            );
          })}
        </div>

        <div className={style.cartTotalBlock}>
          <ul>
            <li>
              <span>Итого</span>
              <div></div>
              <b>{totalPrice} тг.</b>
            </li>
            <li>
              <span>Налог {5 - discount}%</span>
              <div></div>
              <b>{(totalPrice * (5 - discount)) / 100} тг.</b>
            </li>
          </ul>
          <div className={style.orderButton}>
            <button>Оформить заказ</button>
            <img
              src="./img/arrow.svg"
              alt="arrow icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
