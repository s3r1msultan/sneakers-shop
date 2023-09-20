export function Cart({
  onClickRemove,
  setIsCartOpened,
  cartItems,
}: {
  onClickRemove: Function;
  setIsCartOpened: Function;
  cartItems?: { name: string; price: number; imageURL: string; id: string }[];
}) {
  return (
    <div className="overlay">
      <div className="cart">
        <div>
          <h2>Корзина</h2>
          <button onClick={() => setIsCartOpened(false)}>
            <img src="./img/cancel.svg" alt="" />
          </button>
        </div>
        <div className="cart__items">
          {cartItems?.map((cartItem) => {
            return (
              <div className="cart__item" key={cartItem.name + cartItem.price}>
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

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого</span>
              <div></div>
              <b>210000 тг.</b>
            </li>
            <li>
              <span>Налог 5%</span>
              <div></div>
              <b>10500 тг.</b>
            </li>
          </ul>
          <div className="orderButton">
            <button>Оформить заказ</button>
            <img src="./img/arrow.svg" alt="arrow icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
