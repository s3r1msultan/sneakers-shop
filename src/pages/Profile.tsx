import { EventHandler, SetStateAction, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

export function Profile({ user }: { user: any }) {
  const style = {
    padding: "40px",
    fontSize: "20px",
    margin: "20px",
  };

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");

  const onChangeNameInput = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setNameInput(event.target.value);
  };

  const onChangeSurnameInput = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSurnameInput(event.target.value);
  };

  const onChangeEmailInput = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmailInput(event.target.value);
  };

  function validateForm() {
    let isValid = true;

    if (
      nameInput.trim() === "" ||
      surnameInput.trim() === "" ||
      emailInput.trim() === ""
    ) {
      isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput)) {
      isValid = false;
    }

    if (isValid) {
      alert("Form is valid");
      return;
    } else {
      alert("Form is not valid");
      return;
    }
  }

  const buttonStyle = {
    margin: "10px",
    padding: "10px 20px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    backgroundColor: "#ddd",
  };
  return (
    <main className="main">
      <div>
        <h1>Личный профиль</h1>
      </div>
      <a
        href="./tasks.html"
        target="_blank"
        style={style}
      >
        Assignment 3
      </a>
      <div className="task task2">
        <h2>Change profile data</h2>
        <form className="center">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={emailInput}
            required
            onChange={onChangeEmailInput}
          />
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            required
            value={surnameInput}
            onChange={onChangeSurnameInput}
          />
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            required
            value={nameInput}
            onChange={onChangeNameInput}
          />

          <button
            style={buttonStyle}
            onClick={validateForm}
          >
            Change
          </button>
        </form>
      </div>
    </main>
  );
}
