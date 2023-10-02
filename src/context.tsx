import { createContext } from "react";
import { CommonCardInfo } from "./App";

type AppContext = {
  sneakers: CommonCardInfo[];
  cartItems: CommonCardInfo[];
  favorites: CommonCardInfo[];
  isLoading: boolean;
  hasSneakers: Function;
};

export const AppContext = createContext<AppContext>({
  sneakers: [],
  cartItems: [],
  favorites: [],
  isLoading: true,
  hasSneakers: () => {},
});
