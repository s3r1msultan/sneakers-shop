import "./App.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "./Components/Header/Header";
import { Cart } from "./Components/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { AppContext } from "./context";
import { Profile } from "./pages/Profile";
import { Bootstrap } from "./pages/Bootstrap";

export interface CommonCardInfo {
  id: number;
  name: string;
  price: number;
  imageURL: string;
}

function App() {
  const [sneakers, setSneakers] = useState<Array<CommonCardInfo>>([]);
  const [cartItems, setCartItems] = useState<Array<CommonCardInfo>>([]);
  const [favorites, setFavorites] = useState<Array<CommonCardInfo>>([]);
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const user = await axios
          .get("https://sneakers-shop-db.onrender.com/users/0")
          .then((res) => res.data);
        const sneakersDB = await axios
          .get("https://sneakers-shop-db.onrender.com/sneakers")
          .then((res) => res.data);
        const cartDB = await axios
          .get("https://sneakers-shop-db.onrender.com/users/0")
          .then((res) => res.data.cart);
        const favoritesDB = await axios
          .get("https://sneakers-shop-db.onrender.com/users/0")
          .then((res) => res.data.favorites);
        setIsLoading(false);
        setUser(user);
        setCartItems(cartDB);
        setFavorites(favoritesDB);
        setSneakers(sneakersDB);
      } catch (error) {
        alert("Ошибка при запросе данных");
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const onClickPlus = async (sneakersItem: CommonCardInfo) => {
    try {
      const foundElement = cartItems.find(
        (cartItem) => cartItem.id === sneakersItem.id
      );
      if (foundElement) {
        onClickRemove(foundElement);
      } else {
        setCartItems((prev) => [...prev, sneakersItem]);
        await axios.patch("https://sneakers-shop-db.onrender.com/users/0", {
          cart: [...cartItems, sneakersItem],
        });
      }
    } catch (error) {
      alert("Возникла ошибка при добавлении в корзину");
      console.log(error);
    }
  };

  const onClickFavorite = async (sneakersItem: CommonCardInfo) => {
    try {
      const foundElement = favorites.find(
        (favorite) => favorite.id === sneakersItem.id
      );
      if (foundElement) {
        setFavorites((prev) =>
          prev.filter((favorite) => favorite.id !== foundElement.id)
        );
        await axios.patch("https://sneakers-shop-db.onrender.com/users/0", {
          favorites: favorites.filter(
            (favorite) => favorite.id !== foundElement.id
          ),
        });
      } else {
        setFavorites((prev) => [...prev, sneakersItem]);
        await axios.patch("https://sneakers-shop-db.onrender.com/users/0", {
          favorites: [...favorites, sneakersItem],
        });
      }
    } catch (error) {
      alert("Ошибка при добавлении в закладки");
      console.log(error);
    }
  };

  const onClickRemove = async (sneakersItem: CommonCardInfo) => {
    try {
      setCartItems((prev) =>
        prev.filter((cartItem) => cartItem.id !== sneakersItem.id)
      );
      axios.patch("https://sneakers-shop-db.onrender.com/users/0", {
        cart: cartItems.filter((cartItem) => cartItem.id !== sneakersItem.id),
      });
    } catch (error) {
      alert("Возникла ошибка при удалении товара из корзины");
      console.log(error);
    }
  };

  const hasSneakers = (
    sneakersItem: CommonCardInfo,
    array: CommonCardInfo[]
  ) => {
    return array.some((item) => item.id === sneakersItem.id);
  };

  return (
    <AppContext.Provider
      value={{
        sneakers,
        cartItems,
        favorites,
        isLoading,
        hasSneakers,
      }}
    >
      <div className="wrapper">
        {isCartOpened && (
          <Cart
            onClickRemove={onClickRemove}
            setIsCartOpened={setIsCartOpened}
          />
        )}
        <Header setIsCartOpened={setIsCartOpened} />
        <Routes>
          <Route
            path="/bootstrap"
            element={<Bootstrap />}
          />
          <Route
            path="/"
            element={
              <Home
                onClickFavorite={onClickFavorite}
                onClickPlus={onClickPlus}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                onClickFavorite={onClickFavorite}
                onClickPlus={onClickPlus}
              />
            }
          />

          <Route
            path="/profile"
            element={<Profile user={user} />}
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
