import { useContext } from "react";
import style from "./Card.module.scss";
import { CommonCardInfo } from "../../App";
import ContentLoader from "react-content-loader";
import { AppContext } from "../../context";

export interface CardProps {
  sneakersItem: CommonCardInfo;
  onClickPlus: Function;
  onClickFavorite: Function;
}

export function Card({
  sneakersItem,
  onClickPlus,
  onClickFavorite,
}: CardProps) {
  const { hasSneakers, favorites, cartItems, isLoading } =
    useContext(AppContext);

  const handleOnClickFavorite = () => {
    onClickFavorite(sneakersItem);
  };
  const handleOnClickPlus = () => {
    onClickPlus(sneakersItem);
  };
  return (
    <div className={style.card}>
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={160}
          height={189}
          viewBox="0 0 160 189"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect
            x="0"
            y="0"
            rx="10"
            ry="10"
            width="150"
            height="90"
          />
          <rect
            x="0"
            y="105"
            rx="3"
            ry="3"
            width="150"
            height="15"
          />
          <rect
            x="0"
            y="125"
            rx="3"
            ry="3"
            width="100"
            height="15"
          />
          <rect
            x="0"
            y="165"
            rx="8"
            ry="8"
            width="80"
            height="24"
          />
          <rect
            x="118"
            y="157"
            rx="8"
            ry="8"
            width="32"
            height="32"
          />
        </ContentLoader>
      ) : (
        <>
          <div
            className={style.favorite}
            onClick={handleOnClickFavorite}
          >
            {hasSneakers(sneakersItem, favorites) ? (
              <img
                src="./img/liked.svg"
                alt="liked icon"
              />
            ) : (
              <img
                src="./img/unliked.svg"
                alt="unliked icon"
              />
            )}
          </div>
          <img
            src={sneakersItem.imageURL}
            alt="sneakers"
            width={133}
            height={112}
          />
          <p>{sneakersItem.name}</p>
          <div>
            <div className={style["price-info"]}>
              <span>Цена:</span>
              <b>{sneakersItem.price} тг.</b>
            </div>
            <button onClick={handleOnClickPlus}>
              {hasSneakers(sneakersItem, cartItems) ? (
                <img
                  src="./img/checked.svg"
                  alt="Checked button"
                />
              ) : (
                <img
                  src="./img/plus.svg"
                  alt="Plus button"
                />
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
