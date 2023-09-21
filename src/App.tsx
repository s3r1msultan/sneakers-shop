import "./App.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "./Components/Card/Card";
import { Header } from "./Components/Header";
import { Cart } from "./Components/Cart/Cart";

export interface CommonCardInfo {
  sneakersId: number;
  name: string;
  price: number;
  imageURL: string;
}

function App() {
  const [sneakers, setSneakers] = useState<Array<CommonCardInfo>>([]);
  const [cartItems, setCartItems] = useState<Array<CommonCardInfo>>([]);
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("https://650b01cddfd73d1fab09679c.mockapi.io/sneakers")
          .then((res) => setSneakers(res.data));

        await axios
          .get("https://650b01cddfd73d1fab09679c.mockapi.io/cart")
          .then((res) => setCartItems(res.data));
      } catch (error) {
        alert("Ошибка при запросе данных");
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const onClickPlus = async (obj: CommonCardInfo) => {
    try {
      const findElement = cartItems.find(
        (cartItem) => cartItem.sneakersId === obj.sneakersId
      );
      if (findElement) {
        onClickRemove(findElement);
      } else {
        setCartItems((prev) => [...prev, obj]);
        await axios.post(
          "https://650b01cddfd73d1fab09679c.mockapi.io/cart",
          obj
        );
      }
      console.log(cartItems);
    } catch (error) {
      alert("Возникла ошибка при добавлении в корзину");
      console.log(error);
    }
  };

  const onClickFavorite = () => {};

  const onClickRemove = async (obj: CommonCardInfo) => {
    try {
      setCartItems((prev) =>
        prev.filter((cartItem) => cartItem.sneakersId !== obj.sneakersId)
      );
      await axios
        .get(
          `https://650b01cddfd73d1fab09679c.mockapi.io/cart?sneakersId=${obj.sneakersId}`
        )
        .then((res) => res.data)
        .then((item) =>
          axios.delete(
            `https://650b01cddfd73d1fab09679c.mockapi.io/cart/${item[0].id}`
          )
        );
    } catch (error) {
      alert("Возникла ошибка при удалении товара");
      console.log(error);
    }
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
            .map((sneakersItem, index) => {
              return (
                <Card
                  sneakersId={sneakersItem.sneakersId}
                  name={sneakersItem.name}
                  price={sneakersItem.price}
                  imageURL={sneakersItem.imageURL}
                  key={sneakersItem.name + sneakersItem.price + index}
                  onClickFavorite={onClickFavorite}
                  onClickPlus={onClickPlus}
                  // isAdded={
                  //   cartItems.find(
                  //     (cartItem) =>
                  //       cartItem.sneakersId === sneakersItem.sneakersId
                  //   )
                  //     ? true
                  //     : false
                  // }
                />
              );
            })}
        </div>
      </main>
    </div>
  );
}

export default App;
