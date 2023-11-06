import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Dropdown,
} from "react-bootstrap";

const Contacts: React.FC = () => {
  return (
    <Container>
      <h1 className="my-4">Контакты</h1>
      <Row>
        <Col className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Служба поддержки</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Почта:</strong> hamlethan1999@gmail.com
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Телефон:</strong> +77762559598
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Социальная сеть</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Телеграм:</strong>
                  <a
                    href="https://t.me/h4m13t"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    h4m13t
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Инстаграм:</strong>{" "}
                  <a
                    href="https://instagram.com/s3r1msultan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    s3r1msultan
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>GitHub:</strong>{" "}
                  <a
                    href="https://github.com/s3r1msultan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    s3r1msultan
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
