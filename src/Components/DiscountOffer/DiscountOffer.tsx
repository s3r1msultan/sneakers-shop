import React, { useState } from "react";
import "./DiscountOffer.scss";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const DiscountOffer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <div className="discount_offer">
      <h3>Хотите получить скидку в 10%?</h3>
      <Button
        variant="success"
        onClick={handleShow}
      >
        Получить
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Получение скидки</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Вы перейдете на страницу с видео, которое должны будете просмотреть
          для успешного прохождения теста. Также в тесте будет информация про
          наш магазин. <br />
          <br />В случае <span className="text-success">успешного</span>{" "}
          прохождения теста, у вас будет{" "}
          <span className="text-success">скидка</span> в 10%. <br />В случае{" "}
          <span className="text-danger">провала</span> вы получите{" "}
          <span className="text-danger">штраф</span> в размере 10%.
          <br />
          <br />
          Вы согласны пройти тест?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
          >
            Отказаться
          </Button>
          <Link to={"/discount"}>
            <Button
              variant="primary"
              onClick={handleClose}
            >
              Подтвердить
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DiscountOffer;
