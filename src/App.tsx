import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="wrapper">
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
          <li>
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
        <h1>Все кроссовки</h1>

        <div className="sneakers">
          <div className="card">
            <img
              src="./img/sneakers/first.png"
              alt="sneakers"
              width={133}
              height={112}
            />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div>
              <div className="price-info">
                <span>Цена:</span>
                <b>60 000 тг.</b>
              </div>
              <button>
                <img src="./img/plus.svg" alt="Plus button" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              src="./img/sneakers/first.png"
              alt="sneakers"
              width={133}
              height={112}
            />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div>
              <div className="price-info">
                <span>Цена:</span>
                <b>60 000 тг.</b>
              </div>
              <button>
                <img src="./img/plus.svg" alt="Plus button" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              src="./img/sneakers/first.png"
              alt="sneakers"
              width={133}
              height={112}
            />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div>
              <div className="price-info">
                <span>Цена:</span>
                <b>60 000 тг.</b>
              </div>
              <button>
                <img src="./img/plus.svg" alt="Plus button" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              src="./img/sneakers/first.png"
              alt="sneakers"
              width={133}
              height={112}
            />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div>
              <div className="price-info">
                <span>Цена:</span>
                <b>60 000 тг.</b>
              </div>
              <button>
                <img src="./img/plus.svg" alt="Plus button" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
