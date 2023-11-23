import { useState, useContext } from "react";
import { Card } from "../Components/Card/Card";
import { AppContext } from "../context";
import { Slider } from "../Components/Slider/Slider";
import DiscountOffer from "../Components/DiscountOffer/DiscountOffer";

export function Home({
  onClickFavorite,
  onClickPlus,
}: {
  onClickFavorite: Function;
  onClickPlus: Function;
}) {
  const { sneakers, isLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  function renderCards() {
    const filteredSneakers = sneakers.filter(({ name }: { name: string }) => {
      return name.toLowerCase().includes(searchValue.toLowerCase());
    });
    return (isLoading ? [...Array(10)] : filteredSneakers).map(
      (sneakersItem, index) => {
        return (
          <Card
            sneakersItem={sneakersItem}
            key={index}
            onClickFavorite={onClickFavorite}
            onClickPlus={onClickPlus}
          />
        );
      }
    );
  }

  return (
    <main className="main">
      <div>
        <Slider />
      </div>
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
      <div className="sneakers">{renderCards()}</div>
      <DiscountOffer />
    </main>
  );
}
