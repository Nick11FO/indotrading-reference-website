import "../component/MobileNavbar.css";
import "../App.css";
import logo from "./asset/indotrading-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";
import { useState } from "react";

function MobileNavbar() {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarVisible(!isSideBarVisible);

    if (!isSideBarVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  };

  return (
    <div className="mobileNavbar">
      <div
        className={`sideBar ${isSideBarVisible ? "showYourSelfsideBar" : ""}`}
      >
        <div
          className={`sideBar__container ${
            isSideBarVisible ? "showYourSelfcontainer" : ""
          }`}
        >
          <div className="sideBar__top">
            <div className="sideBar__logo-container">
              <img src={logo} alt="logo" />
            </div>

            <button className="close" onClick={toggleSideBar}>
              <CloseIcon sx={{ fontSize: 30 }} />
            </button>
          </div>

          <div className="sideBar__main">
            <div className="enter">
              <a href="" className="signup">
                Sign Up
              </a>
              /
              <a href="" className="login">
                Log In
              </a>
            </div>

            <div className="sideBar__search">
              <input
                type="text"
                className="sideBarSearch"
                placeholder="Ketik Kebutuhan Anda"
              />
            </div>

            <div className="sideBar__search-icon">
              <SearchIcon sx={{ color: grey[50] }} />
            </div>
          </div>
        </div>
      </div>

      <div className="mobileNavbar__container">
        <button className="mobileNavbar__menu" onClick={toggleSideBar}>
          <MenuIcon />
        </button>

        <div className="mobNavbar__logo-container">
          <img src={logo} alt="logo" />
        </div>

        <div className="share">
          <ShareIcon />
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;
