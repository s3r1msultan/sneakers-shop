import { useState } from "react";
import styles from "./Card.module.scss";
import { CommonCardInfo } from "../../App";

export interface CardProps extends CommonCardInfo {
  isLiked?: boolean;
  isAdded?: boolean;
  onClickPlus: Function;
  onClickFavorite: Function;
}

export function Card({
  name,
  price,
  imageURL,
  sneakersId,
  isLiked = false,
  isAdded = false,
  onClickPlus,
  onClickFavorite,
}: CardProps) {
  const [liked, setLiked] = useState(isLiked);
  const [added, setAdded] = useState(isAdded);

  const handleOnClickFavorite = () => {
    onClickFavorite();
    setLiked(!liked);
  };
  const handleOnClickPlus = () => {
    onClickPlus({ sneakersId, name, price, imageURL });
    setAdded(!added);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={handleOnClickFavorite}>
        {liked ? (
          <img src="./img/liked.svg" alt="liked icon" />
        ) : (
          <img src="./img/unliked.svg" alt="unliked icon" />
        )}
      </div>
      <img src={imageURL} alt="sneakers" width={133} height={112} />
      <p>{name}</p>
      <div>
        <div className={styles["price-info"]}>
          <span>Цена:</span>
          <b>{price} тг.</b>
        </div>
        <button onClick={handleOnClickPlus}>
          {added ? (
            <img src="./img/checked.svg" alt="Checked button" />
          ) : (
            <img src="./img/plus.svg" alt="Plus button" />
          )}
        </button>
      </div>
    </div>
  );
}
