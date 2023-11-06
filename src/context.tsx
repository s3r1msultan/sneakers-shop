import { createContext } from "react";
import { SneakersItem } from "./App";

type AppContext = {
  sneakers: SneakersItem[];
  cartItems: SneakersItem[];
  favorites: SneakersItem[];
  isLoading: boolean;
  hasSneakers: Function;
  setSneakers: Function;
};

export const AppContext = createContext<AppContext>({
  sneakers: [],
  cartItems: [],
  favorites: [],
  isLoading: true,
  hasSneakers: () => {},
  setSneakers: () => {},
});
