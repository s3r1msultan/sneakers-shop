import { createContext } from "react";
import { SneakersItem } from "./App";

type AppContext = {
  discount: number;
  setDiscount: Function;
  sneakers: SneakersItem[];
  cartItems: SneakersItem[];
  favorites: SneakersItem[];
  isLoading: boolean;
  hasSneakers: Function;
  setSneakers: Function;
};

export const AppContext = createContext<AppContext>({
  discount: 0,
  setDiscount: () => {},
  sneakers: [],
  cartItems: [],
  favorites: [],
  isLoading: true,
  hasSneakers: () => {},
  setSneakers: () => {},
});
