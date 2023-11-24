import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import { AppContext } from "./context";
import { Cart } from "./Components/Cart/Cart";
import { Header } from "./Components/Header/Header";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

import "bootstrap/scss/bootstrap.scss";
import "./App.scss";
import { Footer } from "./Components/Footer/Footer";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import DiscountOffer from "./Components/DiscountOffer/DiscountOffer";
import DiscountPage from "./pages/DiscountPage";

export interface SneakersItem {
  id: number;
  name: string;
  price: number;
  imageURL: string;
}

function App() {
  const [discount, setDiscount] = useState<number>(0);
  const [sneakers, setSneakers] = useState<Array<SneakersItem>>([]);
  const [cartItems, setCartItems] = useState<Array<SneakersItem>>([]);
  const [favorites, setFavorites] = useState<Array<SneakersItem>>([]);
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

  const onClickPlus = async (sneakersItem: SneakersItem) => {
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

  const onClickFavorite = async (sneakersItem: SneakersItem) => {
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

  const onClickRemove = async (sneakersItem: SneakersItem) => {
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

  const hasSneakers = (sneakersItem: SneakersItem, array: SneakersItem[]) => {
    return array.some((item) => item.id === sneakersItem.id);
  };

  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 500) {
  //     $("#scroll-to-top").fadeIn();
  //   } else {
  //     $("#scroll-to-top").fadeOut();
  //   }
  // });

  return (
    <AppContext.Provider
      value={{
        discount,
        setDiscount,
        sneakers,
        setSneakers,
        cartItems,
        favorites,
        isLoading,
        hasSneakers,
      }}
    >
      <Container className="wrapper">
        {isCartOpened && (
          <Cart
            onClickRemove={onClickRemove}
            setIsCartOpened={setIsCartOpened}
          />
        )}
        <Header setIsCartOpened={setIsCartOpened} />
        <Routes>
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
          <Route
            path="/contacts"
            element={<Contacts />}
          />
          <Route
            path="/about"
            element={<AboutUs />}
          />
          <Route
            path="/discount"
            element={<DiscountPage />}
          />
        </Routes>
        <Footer />
        <button id="scroll-to-top">Top</button>
      </Container>
    </AppContext.Provider>
  );
}

export default App;
