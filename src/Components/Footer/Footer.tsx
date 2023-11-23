import React from "react";
import "./Fotter.scss";
export const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-light text-center py-3">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Sneakers Shop</p>
        <p>
          Адрес:{" "}
          <a
            href="https://go.2gis.com/fzo7t"
            target="_blank"
          >
            AITU
          </a>
        </p>
        <p>
          Телефон: <a href="tel: +77052920019">+77052920019</a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:ersultanserimbetov@gmail.com">
            ersultanserimbetov@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};
