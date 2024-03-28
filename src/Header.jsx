import React from "react";
import "./styles/style.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-ml navbar-light bg-light custom-header">
      <a className="navbar-brand" href="/">
        <img
          src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/f92d5f2f7d56636846861c458c0d0b6c.svg"
          alt="Duolingo"
          className="logo"
        />
      </a>
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
          <a className="dropdown-item" href="#">
            English
          </a>
          <a className="dropdown-item" href="#">
            Spanish
          </a>
          <a className="dropdown-item" href="#">
            French
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
