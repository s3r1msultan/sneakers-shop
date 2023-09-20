import "./App.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "./Components/Card/Card";
import { Header } from "./Components/Header";
import { Cart } from "./Components/Cart/Cart";

interface CommonCardInfo {
  name: string;
  price: number;
  imageURL: string;
}

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [cartItems, setCartItems] = useState<Array<any>>([]);
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get("https://650b01cddfd73d1fab09679c.mockapi.io/sneakers")
      .then((res) => setSneakers(res.data));

    axios
      .get("https://650b01cddfd73d1fab09679c.mockapi.io/cart")
      .then((res) => setCartItems(res.data));
  }, []);

  const onClickPlus = (obj: CommonCardInfo) => {
    axios.post("https://650b01cddfd73d1fab09679c.mockapi.io/cart", obj);
    if (!cartItems.includes(obj)) {
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onClickFavorite = () => {};

  const onClickRemove = ({ id }: { id: string }) => {
    axios.delete(`https://650b01cddfd73d1fab09679c.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((cartItem) => cartItem.id !== id));
  };

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper">
      {isCartOpened && (
        <Cart
          onClickRemove={onClickRemove}
          setIsCartOpened={setIsCartOpened}
          cartItems={cartItems}
        />
      )}
      <Header setIsCartOpened={setIsCartOpened} />
      <main className="main">
        <div>
          <h1>
            {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}
          </h1>
          <div className="search-block">
            <img
              src="./img/search.svg"
              alt="search icon"
              width={14}
              height={14}
            />
            <input
              onChange={onChangeSearchValue}
              type="text"
              placeholder="Поиск..."
              value={searchValue}
            />
          </div>
        </div>

        <div className="sneakers">
          {sneakers
            .filter(({ name }: { name: string }) => {
              return name.toLowerCase().includes(searchValue.toLowerCase());
            })
            .map(({ name, price, imageURL }) => {
              return (
                <Card
                  name={name}
                  price={price}
                  key={name + price}
                  imageURL={imageURL}
                  onClickFavorite={onClickFavorite}
                  onClickPlus={onClickPlus}
                />
              );
            })}
        </div>
      </main>
    </div>
  );
}

export default App;
