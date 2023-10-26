import { useContext, useState } from "react";
import { AppContext } from "../../context";
import style from "./Modal.module.scss";
import { CommonCardInfo } from "../../App";
export const Modal = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  const { sneakers, setSneakers } = useContext(AppContext);
  const [sneakersItem, setSneakersItem] = useState<CommonCardInfo>({
    id: sneakers.length + 1,
    name: "",
    price: 0,
    imageURL: "",
  });
  const buttonStyle = {
    margin: "10px",
    padding: "10px 20px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    backgroundColor: "#eeefff",
  };

  const [name, setName] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [imageURL, setImageURL] = useState<string>();

  const validateForm = (): boolean => {
    if (name === undefined || imageURL === undefined || price === undefined) {
      return false;
    }
    if (name === "" && imageURL === "") {
      return false;
    }
    return true;
  };

  const addSneakers = () => {
    if (validateForm()) {
      console.log(name);
      console.log(price);
      console.log(imageURL);
      setSneakersItem((prev) => ({
        id: sneakers[sneakers.length - 1].id + 1,
        name: name || "",
        price: price || 0,
        imageURL: imageURL || "",
      }));
      setSneakers((prev: CommonCardInfo[]) => [...prev, sneakersItem]);

      closeModal();
    }
  };

  return (
    <div className={isOpen ? "overlay " + style.modal : style.disable}>
      <div className={style.modalContent}>
        <div className={style.modalHeader}>
          <h2>Добавление кроссовок</h2>
          <button
            onClick={closeModal}
            className={style.modalButton}
          >
            X
          </button>
        </div>
        <div>
          <label htmlFor="name">Название:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Цена, тг.:</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="imageURL">URL изображения:</label>
          <input
            type="text"
            name="imageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>
        <button
          style={buttonStyle}
          onClick={addSneakers}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};
