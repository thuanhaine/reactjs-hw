import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="footer__container">
          <div className="footer__title">
            <h1 className="footer__title-text">Thuan Hai</h1>
          </div>
        <div className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <NavLink
                to="/home"
                onClick={this}
                className="footer__nav-item--link"
              >
                Home
              </NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink
                to="/books"
                onClick={this}
                className="footer__nav-item--link"
              >
                Books
              </NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink
                to="/home"
                onClick={this}
                className="footer__nav-item--link"
              >
                About Author
              </NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink
                to="/home"
                onClick={this}
                className="footer__nav-item--link"
              >
                Blog
              </NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink
                to="/home"
                onClick={this}
                className="footer__nav-item--link"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div class="social-list">
            <i class="fa fa-google"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-youtube"></i>
            <i class="fa fa-pinterest"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-linkedin"></i>
        </div>
        </div>
        <p class="coppyright">
          Copyright &copy; 2022 ThuanHai Store | Powered ThuanHai Store
        </p>
      </div>
      
    </>
  );
}

export default Footer;
