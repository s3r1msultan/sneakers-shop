import React from "react";
import { Card } from "../Components/Card/Card";
import { AppContext } from "../context";
import DiscountOffer from "../Components/DiscountOffer/DiscountOffer";

export function Favorites({
  onClickFavorite,
  onClickPlus,
}: {
  onClickFavorite: Function;
  onClickPlus: Function;
}) {
  const { favorites, isLoading } = React.useContext(AppContext);
  return (
    <main className="main">
      <div>
        <h1>Мои закладки</h1>
      </div>

      <div className="sneakers">
        {(isLoading ? [...Array(8)] : favorites).map((sneakersItem, index) => {
          return (
            <Card
              sneakersItem={sneakersItem}
              key={index}
              onClickFavorite={onClickFavorite}
              onClickPlus={onClickPlus}
            />
          );
        })}
      </div>
      <DiscountOffer />
    </main>
  );
}
