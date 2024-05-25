import React from "react";
import './App.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-ml navbar-light custom-header">
      <button className="navbar-brand">
        <img
          src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/f92d5f2f7d56636846861c458c0d0b6c.svg"
          alt="Duolingo"
          className="logo"
        />
      </button>
      <div className="dropdown ml-auto">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Site language: English
        </button>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownMenuButton"
        >
          <button className="dropdown-item">
            English
          </button>
          <button className="dropdown-item">
            Spanish
          </button>
          <button className="dropdown-item">
            French
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
