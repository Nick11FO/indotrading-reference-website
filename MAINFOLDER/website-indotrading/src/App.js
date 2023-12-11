import "./App.css";
import Navbar from "./component/Navbar";
import ImageSlider from "./component/ImageSlider";
import Category from "./component/Category";
import Footer from "./component/Footer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Records from "./records.json";
import News from "./news.json";

import { fontSize } from "@mui/system";

function App() {
  const slides = [
    {
      url: "http://localhost:3000/carouselImage/carousel-img1.png",
      title: "firstImage",
    },
    {
      url: "http://localhost:3000/carouselImage/carousel-img2.png",
      title: "secondImage",
    },
    {
      url: "http://localhost:3000/carouselImage/carousel-img3.png",
      title: "thirdImage",
    },
  ];

  return (
    <div className="App">
      <Navbar />

      <div className="tabs__container">
        <h1 className="activeTabs">PRODUK</h1>
        <h1 className="not-activeTabs">PERUSAHAAN</h1>
        <h1 className="not-activeTabs">JASA</h1>
      </div>

      <div className="carousel__container">
        <ImageSlider slides={slides} />
      </div>

      <Category />

      <div className="main__content">
        <div className="smartphone__section">
          <h1>SMARTPHONE</h1>
          <div className="item__container">
            {Records &&
              Records.map((record) => {
                return (
                  <a href="" className="item" key={record.id}>
                    <img src={record.img} alt="img" className="item__img" />
                    <p className="item__name">{record.name}</p>
                    <h3 className="item__price">Rp. {record.price}</h3>
                    <p className="item__cv">{record.cv}</p>
                    <p className="item__tax">Status Pajak: {record.pajak}</p>
                    <p className="item__loc">
                      <LocationOnIcon sx={{ fontSize: 15 }} />
                      {record.loc}
                    </p>
                  </a>
                );
              })}
          </div>
          <a href="" className="see__all-smartphone">
            Lihat Semua
            <KeyboardArrowRightIcon />
          </a>
        </div>

        <div className="smartphone__section">
          <h1>TABLET</h1>
          <div className="item__container">
            {Records &&
              Records.map((record) => {
                return (
                  <a href="" className="item" key={record.id}>
                    <img src={record.img} alt="img" className="item__img" />
                    <p className="item__name">{record.name}</p>
                    <h3 className="item__price">Rp. {record.price}</h3>
                    <p className="item__cv">{record.cv}</p>
                    <p className="item__tax">Status Pajak: {record.pajak}</p>
                    <p className="item__loc">
                      <LocationOnIcon sx={{ fontSize: 15 }} />
                      {record.loc}
                    </p>
                  </a>
                );
              })}
          </div>
          <a href="" className="see__all-smartphone">
            Lihat Semua
            <KeyboardArrowRightIcon />
          </a>
        </div>

        <div className="smartphone__section">
          <h1>LAPTOP</h1>
          <div className="item__container">
            {Records &&
              Records.map((record) => {
                return (
                  <a href="" className="item" key={record.id}>
                    <img src={record.img} alt="img" className="item__img" />
                    <p className="item__name">{record.name}</p>
                    <h3 className="item__price">Rp. {record.price}</h3>
                    <p className="item__cv">{record.cv}</p>
                    <p className="item__tax">Status Pajak: {record.pajak}</p>
                    <p className="item__loc">
                      <LocationOnIcon sx={{ fontSize: 15 }} />
                      {record.loc}
                    </p>
                  </a>
                );
              })}
          </div>
        </div>
        <a href="" className="see__all-smartphone">
          Lihat Semua
          <KeyboardArrowRightIcon />
        </a>
      </div>

      <div className="news__section">
        <h1>INDOTRADING NEWS</h1>
        <div className="each__news">
          {News &&
            News.map((news) => {
              return (
                <div className="news__each" key={news.id}>
                  <h3>{news.title}</h3>
                  <p>{news.content}</p>
                </div>
              );
            })}
        </div>
        <a href="" className="news__other">
          Berita Lainnya
          <KeyboardArrowRightIcon />
        </a>
      </div>

      <div className="footer__section">
        <Footer />
      </div>
    </div>
  );
}

export default App;
