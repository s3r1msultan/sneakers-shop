import React, { useState } from "react";

interface CardProps {
  isLiked?: boolean;
  price: number;
  title: string;
}

export function Card({ isLiked = false, price, title }: CardProps) {
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
      <img
        src="./img/sneakers/first.png"
        alt="sneakers"
        width={133}
        height={112}
      />
      <p>{title}</p>
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
