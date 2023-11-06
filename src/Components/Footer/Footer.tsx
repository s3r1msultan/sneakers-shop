import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 rounded mb-3">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Магазин кроссовок</p>
        <p>Адрес: Some address</p>
        <p>Телефон: +77052920019</p>
        <p>Email: ersultanserimbetov@gmail.com</p>
      </div>
    </footer>
  );
};
