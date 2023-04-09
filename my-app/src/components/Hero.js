import React from "react";
import { Link } from "react-router-dom";
import sushi from "../assets/sushi.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="left-side">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>
          <Link to="/booking">Reserve a table</Link>
        </button>
      </div>
      <div className="right-side">
        <img
          src={sushi}
          alt="our cook holding a tablet with delicoues baguettes"
        />
      </div>
    </header>
  );
};

export default Header;