import { useState } from "react";
import { Modal } from "../Modal/Modal";

export const AddButton = ({
  onClickFavorite,
  onClickPlus,
}: {
  onClickFavorite: Function;
  onClickPlus: Function;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const buttonStyle = {
    margin: "10px",
    padding: "10px 20px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    backgroundColor: "#eeefff",
  };
  return (
    <>
      <button
        style={buttonStyle}
        onClick={openModal}
      >
        Add Sneakers
      </button>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  );
};
