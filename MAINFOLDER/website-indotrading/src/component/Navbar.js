import "../component/Navbar.css";
import "../App.css";
import logo from "./asset/indotrading-logo.png";
import { grey } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [hasBoxShadow, setHasBoxShadow] = useState(false);
  const btnToggle = () => {
    setIsClicked(!isClicked);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 575);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 575);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setHasBoxShadow(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      {isMobile ? (
        <MobileNavbar />
      ) : (
        <div
          className={`navbar__container ${
            hasBoxShadow ? "with-box-shadow" : ""
          }`}
        >
          <div className="navbar__container-up">
            <div className="logo__container">
              <img src={logo} alt="logo" />
            </div>

            <div className="navbar__search">
              <input
                type="text"
                className="searchBar"
                placeholder="Ketik Kebutuhan Anda"
              />

              <div className="search__tglButton">
                <button
                  onClick={() => {
                    btnToggle();
                  }}
                >
                  PRODUK
                  <KeyboardArrowDownIcon sx={{ color: grey[600] }} />
                </button>

                {/* default hidden */}
                <ul
                  className="tglButton__dropdown"
                  style={{ display: isClicked ? "flex" : "none" }}
                >
                  <li className="option">
                    <a href="">PERUSAHAAN</a>
                  </li>
                  <li className="option">
                    <a href="">TENDER</a>
                  </li>
                </ul>
              </div>

              <div className="search__icon">
                <SearchIcon sx={{ color: grey[50] }} />
              </div>
            </div>

            <div className="navbar__cart">
              <ShoppingCartIcon sx={{ color: grey[600] }} fontSize="large" />
            </div>

            <div className="navbar__login">
              <button className="login__button">LOGIN / DAFTAR</button>
            </div>
          </div>
          <div className="navbar__container-down">
            <div className="navbarDown__button-container">
              <button className="navbarDown__button">
                <a href="" className="navbarDown__a">
                  Box Panel Listrik
                </a>
              </button>
            </div>

            <div className="navbarDown__button-container">
              <button className="navbarDown__button">
                <a href="" className="navbarDown__a">
                  Komponen Listrik
                </a>
              </button>
            </div>

            <div className="navbarDown__button-container">
              <button className="navbarDown__button">
                <a href="" className="navbarDown__a">
                  Panel MDP Listrik
                </a>
              </button>
            </div>

            <div className="navbarDown__button-container">
              <button className="navbarDown__button">
                <a href="" className="navbarDown__a">
                  Panel Cubicle Listrik
                </a>
              </button>
            </div>

            <div className="navbarDown__button-container">
              <button className="navbarDown__button">
                <a href="" className="navbarDown__a">
                  Panel MCB Listrik
                </a>
              </button>
            </div>

            <div className="navbarDown__button-container">
              <button className="navbarDown__button">
                <a href="" className="navbarDown__a">
                  Panel Listrik Industri
                </a>
              </button>
            </div>

            <div className="navbarDown__button-container">
              <button className="navbarDown__button">
                <a href="" className="navbarDown__a">
                  Panel Listrik Indoor
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
