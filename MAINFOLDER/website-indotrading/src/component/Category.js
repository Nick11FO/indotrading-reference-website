import "../component/Category.css";
import "../App.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React, { useState, useEffect, useRef } from "react";

function Category() {
  const [activeSection, setActiveSection] = useState(null);

  const btnToggle = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const categoryContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!categoryContainerRef.current.contains(event.target)) {
        setActiveSection(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="category__container" ref={categoryContainerRef}>
      <h1 className="category__title">Category</h1>

      <div className="category__subtitle-container">
        <div className={`cTitle1 ${activeSection === 1 ? "active" : ""}`}>
          <button
            className="cTitle__title"
            onClick={() => {
              btnToggle(1);
            }}
          >
            Alat Berat
            <KeyboardArrowDownIcon />
          </button>

          <div
            className="cTitle__content"
            style={{ display: activeSection === 1 ? "flex" : "none" }}
          >
            <div className="each">
              <h3 className="each__title">Spare Part Alat Berat</h3>

              <a href="#">Sparepart Forklift</a>
              <a href="#">Sparepart Excavator</a>
              <a href="#">Ban Forklift</a>
              <a href="#">Ban Alat Berat</a>
              <a href="#">Radiator Alat Berat</a>
              <a href="#">Bucket Excavator</a>
            </div>

            <div className="each">
              <h3 className="each__title">Alat Pengangkat</h3>

              <a href="#">Forklift</a>
              <a href="#">Electric Hoist</a>
              <a href="#">Hand Stacker</a>
              <a href="#">Hand Pallet</a>
              <a href="#">Chain Block</a>
              <a href="#">Hoist Crane</a>
            </div>
          </div>
        </div>

        <div className={`cTitle2 ${activeSection === 2 ? "active" : ""}`}>
          <button
            className="cTitle__title"
            onClick={() => {
              btnToggle(2);
            }}
          >
            Alat Elektronik
            <KeyboardArrowDownIcon />
          </button>
          <div
            className="cTitle__content"
            style={{ display: activeSection === 2 ? "flex" : "none" }}
          >
            <div className="each">
              <h3 className="each__title">Spare Part Alat Berat</h3>

              <a href="#">Sparepart Forklift</a>
              <a href="#">Sparepart Excavator</a>
              <a href="#">Ban Forklift</a>
              <a href="#">Ban Alat Berat</a>
              <a href="#">Radiator Alat Berat</a>
              <a href="#">Bucket Excavator</a>
            </div>

            <div className="each">
              <h3 className="each__title">Alat Pengangkat</h3>

              <a href="#">Forklift</a>
              <a href="#">Electric Hoist</a>
              <a href="#">Hand Stacker</a>
              <a href="#">Hand Pallet</a>
              <a href="#">Chain Block</a>
              <a href="#">Hoist Crane</a>
            </div>
          </div>
        </div>

        <div className={`cTitle3 ${activeSection === 3 ? "active" : ""}`}>
          <button
            className="cTitle__title"
            onClick={() => {
              btnToggle(3);
            }}
          >
            Alat Industri
            <KeyboardArrowDownIcon />
          </button>
          <div
            className="cTitle__content"
            style={{ display: activeSection === 3 ? "flex" : "none" }}
          >
            <div className="each">
              <h3 className="each__title">Spare Part Alat Berat</h3>

              <a href="#">Sparepart Forklift</a>
              <a href="#">Sparepart Excavator</a>
              <a href="#">Ban Forklift</a>
              <a href="#">Ban Alat Berat</a>
              <a href="#">Radiator Alat Berat</a>
              <a href="#">Bucket Excavator</a>
            </div>

            <div className="each">
              <h3 className="each__title">Alat Pengangkat</h3>

              <a href="#">Forklift</a>
              <a href="#">Electric Hoist</a>
              <a href="#">Hand Stacker</a>
              <a href="#">Hand Pallet</a>
              <a href="#">Chain Block</a>
              <a href="#">Hoist Crane</a>
            </div>
          </div>
        </div>

        <div className={`cTitle4 ${activeSection === 4 ? "active" : ""}`}>
          <button
            className="cTitle__title"
            onClick={() => {
              btnToggle(4);
            }}
          >
            Alat Pelindung Diri
            <KeyboardArrowDownIcon />
          </button>
          <div
            className="cTitle__content"
            style={{ display: activeSection === 4 ? "flex" : "none" }}
          >
            <div className="each">
              <h3 className="each__title">Spare Part Alat Berat</h3>

              <a href="#">Sparepart Forklift</a>
              <a href="#">Sparepart Excavator</a>
              <a href="#">Ban Forklift</a>
              <a href="#">Ban Alat Berat</a>
              <a href="#">Radiator Alat Berat</a>
              <a href="#">Bucket Excavator</a>
            </div>

            <div className="each">
              <h3 className="each__title">Alat Pengangkat</h3>

              <a href="#">Forklift</a>
              <a href="#">Electric Hoist</a>
              <a href="#">Hand Stacker</a>
              <a href="#">Hand Pallet</a>
              <a href="#">Chain Block</a>
              <a href="#">Hoist Crane</a>
            </div>
          </div>
        </div>

        <div className="cTitle5">
          <div className="cTitle__all-container">
            <a href="" className="cTitle__all">
              SEMUA KATEGORI
            </a>
            <KeyboardArrowRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
