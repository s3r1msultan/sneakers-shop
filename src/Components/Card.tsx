import React, { useState } from "react";

export interface CardProps {
  isLiked?: boolean;
  name: string;
  price: number;
  imageURL: string;
}

export function Card({ isLiked = false, price, name, imageURL }: CardProps) {
  const [liked, setLiked] = useState(isLiked);
  return (
    <div className="card">
      <div className="favorite" onClick={() => setLiked(!liked)}>
        {liked ? (
          <img src="./img/liked.svg" alt="liked icon" />
        ) : (
          <img src="./img/unliked.svg" alt="unliked icon" />
        )}
      </div>
      <img src={imageURL} alt="sneakers" width={133} height={112} />
      <p>{name}</p>
      <div>
        <div className="price-info">
          <span>Цена:</span>
          <b>{price} тг.</b>
        </div>
        <button>
          <img src="./img/plus.svg" alt="Plus button" />
        </button>
      </div>
    </div>
  );
}
