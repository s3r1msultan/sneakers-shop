import "./App.scss";
import { Card, CardProps } from "./Components/Card";
import { Header } from "./Components/Header";

function App() {
  let sneakers: Array<CardProps> = [
    {
      isLiked: true,
      name: "Nike Air Force 1",
      price: 25990,
      imageURL: "./img/sneakers/1.png",
    },
    {
      name: "Nike Air Force 1",
      price: 25990,
      imageURL: "./img/sneakers/2.png",
    },
    {
      name: "Nike Air Force 1",
      price: 25990,
      imageURL: "./img/sneakers/3.png",
    },
    {
      name: "Nike Air Force 1",
      price: 25990,
      imageURL: "./img/sneakers/4.png",
    },
    {
      name: "Nike Air Force 1",
      price: 25990,
      imageURL: "./img/sneakers/5.png",
    },
  ];
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div>
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img
              src="./img/search.svg"
              alt="search icon"
              width={14}
              height={14}
            />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          {sneakers.map(({ isLiked, name, price, imageURL }) => {
            return (
              <Card
                isLiked={isLiked}
                name={name}
                price={price}
                key={name + price}
                imageURL={imageURL}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
