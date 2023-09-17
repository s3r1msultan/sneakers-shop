import React, { useState } from "react";
import "./App.scss";
import { Card } from "./Components/Card";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="wrapper">
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
                <img
                  src="./img/cancel.svg"
                  alt="cancel"
                  width={32}
                  height={32}
                />
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
                <img
                  src="./img/cancel.svg"
                  alt="cancel"
                  width={32}
                  height={32}
                />
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
                <img
                  src="./img/cancel.svg"
                  alt="cancel"
                  width={32}
                  height={32}
                />
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
                <img
                  src="./img/cancel.svg"
                  alt="cancel"
                  width={32}
                  height={32}
                />
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
                <img
                  src="./img/cancel.svg"
                  alt="cancel"
                  width={32}
                  height={32}
                />
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
                <img
                  src="./img/cancel.svg"
                  alt="cancel"
                  width={32}
                  height={32}
                />
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
                <img
                  src="./img/cancel.svg"
                  alt="cancel"
                  width={32}
                  height={32}
                />
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

      <header className="header">
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
        <ul className="header__right">
          <li onClick={() => setIsOpened(!isOpened)}>
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
      <main className="main">
        <div>
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img
              src="./img/search.svg"
              alt="search icon"
              width={14}
              height={14}
            />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          <Card isLiked={true} price={50000} title="Nike Air Force 1" />
          <Card isLiked={true} price={50000} title="Nike Air Force 1" />
          <Card isLiked={true} price={50000} title="Nike Air Force 1" />
          <Card isLiked={true} price={50000} title="Nike Air Force 1" />
          <Card isLiked={true} price={50000} title="Nike Air Force 1" />

          <Card price={20000} title="Adidas " />
        </div>
      </main>
    </div>
  );
}

export default App;
