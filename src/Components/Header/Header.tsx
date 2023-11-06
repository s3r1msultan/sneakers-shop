import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../../context";
import style from "./Header.module.scss";
import { Navbar, Container, Nav, Button, Modal, Form } from "react-bootstrap";
import LoginForm from "../Form/LoginForm";

export function Header({ setIsCartOpened }: { setIsCartOpened: Function }) {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginModalOpen = () => setShowLoginModal(true);
  const handleLoginModalClose = () => setShowLoginModal(false);

  const { cartItems } = useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, { price }) => sum + price, 0);

  const signin = document.querySelector("#signin-btn");

  signin?.addEventListener("click", () => {
    setShowLoginModal((prev) => !prev);
  });

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
    >
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <div className={style.header__left}>
              <img
                src="./img/logo.png"
                alt="Sneakers logo"
                width={40}
                height={40}
              />
              <div className={style.header__info + ""}>
                <h3 className="">Sneakers Shop</h3>
                <p>Магазин лучших кроссовок</p>
              </div>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="jcsb "
        >
          <Nav className="mr-auto">
            <Nav.Link>
              <Link
                className="link-dark"
                to={"/"}
              >
                Главная
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="link-dark"
                to={"/favorites"}
              >
                Favorites
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="link-dark"
                to={"/contacts"}
              >
                Контакты
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="link-dark"
                to={"/about"}
              >
                О нас
              </Link>
            </Nav.Link>
            <Nav.Link
              onClick={() => setIsCartOpened(true)}
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              <img
                src="./img/cart.png"
                alt="cart icon"
                width={18}
                height={18}
                style={{ marginRight: "5px" }}
              />
              <span className="ml-4">{totalPrice} тг.</span>
            </Nav.Link>
          </Nav>
          <Nav>
            <Button
              variant="primary"
              className="btn-light mr2"
              id="signin-btn"
            >
              Войти
            </Button>
            <Button
              variant="primary"
              className="btn-light mr2"
              id="signin-btn"
            >
              Выйти
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <Modal
        show={showLoginModal}
        onHide={handleLoginModalClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Вход</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
      </Modal>
    </Navbar>
  );
}
