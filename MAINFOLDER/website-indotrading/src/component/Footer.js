import "../component/Footer.css";
import "../App.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__up">
        <div className="up">
          <h3>INFORMASI</h3>
          <a href="">Hubungi Kami</a>
          <a href="">Introtrading FAQ</a>
          <a href="">Testimonial</a>
          <a href="">Karir</a>
          <a href="">Partners</a>
          <a href="">Event Introtrading</a>
          <a href="">Terms & Condition</a>
          <a href="">Privacy Policy</a>
        </div>
        <div className="upTwo">
          <div className="up-up">
            <h3>BELI</h3>
            <a href="">Produk Terbaru</a>
            <a href="">Cara Belanja</a>
            <a href="">Daftar Pembeli</a>
          </div>
          <div className="up-down">
            <h3>JUAL</h3>
            <a href="">Perusahaan Terbaru</a>
            <a href="">Cari Proyek</a>
            <a href="">Daftar Jadi Supplier</a>
          </div>
        </div>

        <div className="up-text">
          <h3>B2B MARKETPLACE JAKARTA</h3>
          <p>
            IndoTrading.com adalah B2B Marketplace dan Direktori Bisnis Supplier
            Terbesar di Jakarta.
          </p>
          <p>
            Situs Jual Beli khusus B2B Marketplace, B2B E-commerce, B2B, Pusat
            Distributor, Trading, Supplier, Agen, Grosir, Importir, Exportir dan
            Penyedia Jasa terlengkap di Jakarta.
          </p>
          <p>
            Segera Daftarkan perusahaan anda dan dapatkan akses ke informasi
            projek, tender dan dapatkan website gratis untuk perusahaan anda
            berjualan di Internet.
          </p>
        </div>

        <div className="up">
          <h3>OUR SERVICE</h3>
          <a href="">Premium Supplier</a>
          <a href="">Premium Buyer</a>
          <a href="">JASA SEO</a>
          <a href="">Google Ads</a>
          <a href="">Youtube Ads</a>
          <a href="">Social Media Ads</a>
          <a href="">Google Display Network</a>
          <a href="">Email Bisnis</a>
          <a href="">Buat Website</a>
          <a href="">Toko Daring</a>
        </div>
      </div>
      <div className="footer__mid">
        <div className="up-text">
          <h3>B2B MARKETPLACE JAKARTA</h3>
          <p>
            IndoTrading.com adalah B2B Marketplace dan Direktori Bisnis Supplier
            Terbesar di Jakarta.
          </p>
          <p>
            Situs Jual Beli khusus B2B Marketplace, B2B E-commerce, B2B, Pusat
            Distributor, Trading, Supplier, Agen, Grosir, Importir, Exportir dan
            Penyedia Jasa terlengkap di Jakarta.
          </p>
          <p>
            Segera Daftarkan perusahaan anda dan dapatkan akses ke informasi
            projek, tender dan dapatkan website gratis untuk perusahaan anda
            berjualan di Internet.
          </p>
        </div>
        <div className="up">
          <h3>INFORMASI</h3>
          <a href="">Hubungi Kami</a>
          <a href="">Introtrading FAQ</a>
          <a href="">Testimonial</a>
          <a href="">Karir</a>
          <a href="">Partners</a>
          <a href="">Event Introtrading</a>
          <a href="">Terms & Condition</a>
          <a href="">Privacy Policy</a>
        </div>
        <div className="upTwo">
          <div className="up-up">
            <h3>BELI</h3>
            <a href="">Produk Terbaru</a>
            <a href="">Cara Belanja</a>
            <a href="">Daftar Pembeli</a>
          </div>
          <div className="up-down">
            <h3>JUAL</h3>
            <a href="">Perusahaan Terbaru</a>
            <a href="">Cari Proyek</a>
            <a href="">Daftar Jadi Supplier</a>
          </div>
        </div>

        <div className="up">
          <h3>OUR SERVICE</h3>
          <a href="">Premium Supplier</a>
          <a href="">Premium Buyer</a>
          <a href="">JASA SEO</a>
          <a href="">Google Ads</a>
          <a href="">Youtube Ads</a>
          <a href="">Social Media Ads</a>
          <a href="">Google Display Network</a>
          <a href="">Email Bisnis</a>
          <a href="">Buat Website</a>
          <a href="">Toko Daring</a>
        </div>
      </div>
      <div className="footer__down">
        <div className="footer__down-up">
          <div className="twitter">
            <a href="https://twitter.com/indo_trading">
              <TwitterIcon />
            </a>
          </div>
          <div className="facebook">
            <a href="https://www.facebook.com/IndoTrading/">
              <FacebookIcon />
            </a>
          </div>
          <div className="youTube">
            <a href="https://www.youtube.com/channel/UCsHwn81g7Ie_jj-IbWjKKGw">
              <YouTubeIcon />
            </a>
          </div>
          <div className="ig">
            <a href="https://www.instagram.com/indotrading_official/">
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className="footer__down-down">
          <CopyrightIcon /> 2015-2023 Indotrading. All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
