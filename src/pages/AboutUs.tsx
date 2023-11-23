import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Dropdown,
} from "react-bootstrap";
import DiscountOffer from "../Components/DiscountOffer/DiscountOffer";

const AboutUs: React.FC = () => {
  const animatedCards = document.getElementsByClassName("animatedDiv");
  for (const card of animatedCards) {
    if (card instanceof HTMLElement) {
      // Первая анимация - перемещение
      card.addEventListener("click", () => {
        if (!card.style.transform) {
          card.style.transform = "translateX(200px)";
        } else {
          card.style.transform = "";
        }
      });

      // Вторая анимация - изменение цвета
      card.addEventListener("mouseover", () => {
        card.style.backgroundColor = "gray";
      });

      card.addEventListener("mouseout", () => {
        card.style.backgroundColor = "transparent";
      });
    }
  }
  return (
    <Container>
      <h1 className="my-4">О нас</h1>

      <Row>
        <Col
          lg={4}
          md={6}
          sm={12}
        >
          <Card className="animatedCard">
            <Card.Img
              height={200}
              variant="top"
              src="./img/card-imgs/card1.jpeg"
            />
            <Card.Body>
              <Card.Title>Наш выбор</Card.Title>
              <Card.Text>
                На нашем сайте вы найдете лучший выбор кроссовок для всех
                возрастов и стилей. Мы сотрудничаем с ведущими брендами и
                производителями, чтобы предоставить вам самые актуальные модели
                и дизайны. Наш ассортимент включает в себя как популярные
                классические модели, так и самые современные инновации в мире
                кроссовок. Мы уверены, что у нас есть пара именно для вас.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col
          lg={4}
          md={6}
          sm={12}
        >
          <Card className="animatedCard">
            <Card.Img
              height={200}
              variant="top"
              src="./img/card-imgs/card2.jpeg"
            />
            <Card.Body>
              <Card.Title>Качество и комфорт</Card.Title>
              <Card.Text>
                Мы гордимся тем, что предлагаем кроссовки высокого качества,
                которые обеспечивают максимальный комфорт при носке. Наши товары
                проходят строгий контроль качества, чтобы гарантировать долгий
                срок службы и надежную поддержку ваших ног. Независимо от того,
                занимаетесь ли вы спортом, ходите на прогулки или просто
                предпочитаете удобную обувь в повседневной жизни, наши кроссовки
                помогут вам чувствовать себя комфортно и стильно.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col
          lg={4}
          md={6}
          sm={12}
        >
          <Card className="animatedCard">
            <Card.Img
              height={200}
              variant="top"
              src="./img/card-imgs/card3.jpeg"
            />
            <Card.Body>
              <Card.Title>Поддержка клиентов</Card.Title>
              <Card.Text>
                У нас важны наши клиенты, и мы гарантируем вам выдающийся
                сервис. Наша команда готова ответить на все ваши вопросы и
                помочь вам с выбором и заказом. Мы предоставляем быструю
                доставку и гибкую систему возврата, чтобы вы могли быть уверены
                в вашей покупке. Наш сайт также предлагает удобное
                онлайн-покупательское взаимодействие, где вы можете легко найти
                и сравнить различные модели и размеры.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Dropdown className="mb-3 mt-4">
        <Dropdown.Toggle
          variant="primary"
          id="dropdown-basic"
        >
          Дополнительные детали
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            Специальная коллекция эксклюзивных моделей
          </Dropdown.Item>
          <Dropdown.Item>Персональная гравировка</Dropdown.Item>
          <Dropdown.Item>Экологически чистые материалы</Dropdown.Item>
          <Dropdown.Item>
            Советы от экспертов по подбору кроссовок
          </Dropdown.Item>
          <Dropdown.Item>Программа лояльности и скидки</Dropdown.Item>
          <Dropdown.Item>Бесплатная доставка и возврат</Dropdown.Item>
          <Dropdown.Item>Социальная ответственность</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <DiscountOffer />
    </Container>
  );
};

export default AboutUs;
