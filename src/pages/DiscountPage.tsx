import React from "react";
import DragAndDrop from "../Components/DragAndDrop/DragAndDrop";

const DiscountPage = () => {
  return (
    <div className="discount_page">
      <iframe
        className="video"
        src="https://www.youtube-nocookie.com/embed/XZRHRpDr3QQ?si=P3MDN6DmDx8xhvDl"
        title="Скидка"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <DragAndDrop />
    </div>
  );
};

export default DiscountPage;
