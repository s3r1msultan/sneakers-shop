export function Cart({
  isOpened,
  setIsOpened,
}: {
  isOpened: boolean;
  setIsOpened: Function;
}) {
  return (
    <div className={isOpened ? "overlay" : "invisible"}>
      <div className="cart">
        <div>
          <h2>Корзина</h2>
          <button onClick={() => setIsOpened(!isOpened)}>
            <img src="./img/cancel.svg" alt="" />
          </button>
        </div>
        <div className="cart__items">
          <div className="cart__item">
            <img
              src="./img/sneakers/first.png"
              alt="sneakers"
              width={70}
              height={70}
            />
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>5000 тг.</b>
            </div>
            <button>
              <img src="./img/cancel.svg" alt="cancel" width={32} height={32} />
            </button>
          </div>
          <div className="cart__item">
            <img
              src="./img/sneakers/first.png"
              alt="sneakers"
              width={70}
              height={70}
            />
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>5000 тг.</b>
            </div>
            <button>
              <img src="./img/cancel.svg" alt="cancel" width={32} height={32} />
            </button>
          </div>
          <div className="cart__item">
            <img
              src="./img/sneakers/first.png"
              alt="sneakers"
              width={70}
              height={70}
            />
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>5000 тг.</b>
            </div>
            <button>
              <img src="./img/cancel.svg" alt="cancel" width={32} height={32} />
            </button>
          </div>
          <div className="cart__item">
            <img
              src="./img/sneakers/first.png"
              alt="sneakers"
              width={70}
              height={70}
            />
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>5000 тг.</b>
            </div>
            <button>
              <img src="./img/cancel.svg" alt="cancel" width={32} height={32} />
            </button>
          </div>{" "}
          <div className="cart__item">
            <img
              src="./img/sneakers/first.png"
              alt="sneakers"
              width={70}
              height={70}
            />
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>5000 тг.</b>
            </div>
            <button>
              <img src="./img/cancel.svg" alt="cancel" width={32} height={32} />
            </button>
          </div>{" "}
          <div className="cart__item">
            <img
              src="./img/sneakers/first.png"
              alt="sneakers"
              width={70}
              height={70}
            />
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>5000 тг.</b>
            </div>
            <button>
              <img src="./img/cancel.svg" alt="cancel" width={32} height={32} />
            </button>
          </div>{" "}
          <div className="cart__item">
            <img
              src="./img/sneakers/first.png"
              alt="sneakers"
              width={70}
              height={70}
            />
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>5000 тг.</b>
            </div>
            <button>
              <img src="./img/cancel.svg" alt="cancel" width={32} height={32} />
            </button>
          </div>
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
