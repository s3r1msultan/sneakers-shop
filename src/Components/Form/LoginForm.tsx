import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showTooltip, setShowTooltip] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      formData.email === "johndoe@gmail.com" &&
      formData.password === "12345"
    ) {
      alert("You are successfully logged in");
      setShowTooltip(true);
      return;
    }
    setShowTooltip(true);
    const errorSound = new Audio("./error.mp3");
    errorSound.play();
    alert("Invalid data");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group
        controlId="password"
        style={{ marginBottom: "10px" }}
      >
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
      >
        Войти
      </Button>
      {showTooltip && (
        <div style={{ color: "red" }}>
          Неправильное имя пользователя или пароль
        </div>
      )}
    </Form>
  );
};

export default LoginForm;
