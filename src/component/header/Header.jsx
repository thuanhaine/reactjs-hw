import "./Header.css";
import { NavLink } from "react-router-dom";
import HeaderBtnLogin from "./header_btn_login/index";
import HeaderUser from "./header_user/index";

function Header({ isLogin, onLogout}) {
  console.log(isLogin)
  return (
    <>
      <div className="heading">
        <div className="heading__title">
          <h1 className="heading__title-text">Thuan Hai</h1>
        </div>
        <div className="heading__nav">
          <ul className="heading__nav-list">
            <li className="heading__nav-item">
              <NavLink
                to="/"
                onClick={this}
                className="heading__nav-item--link"
              >
                Home
              </NavLink>
            </li>
            <li className="heading__nav-item">
              <NavLink
                to="/books"
                onClick={this}
                className="heading__nav-item--link"
              >
                Books
              </NavLink>
            </li>
            <li className="heading__nav-item">
              <NavLink
                to="/about"
                onClick={this}
                className="heading__nav-item--link"
              >
                About Author
              </NavLink>
            </li>
            <li className="heading__nav-item">
              <NavLink
                to="/blog"
                onClick={this}
                className="heading__nav-item--link"
              >
                Blog
              </NavLink>
            </li>
            <li className="heading__nav-item">
              <NavLink
                to="/contact"
                onClick={this}
                className="heading__nav-item--link"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="heading__sub_nav">
          <div className="heading__sub_nav-user">
            {isLogin ? <HeaderUser onLogout={onLogout}/> : <HeaderBtnLogin />}
          </div>
          <div className="heading__sub_nav--search">
            <input
              type="text"
              className="heading__sub_nav--search-input"
              placeholder="Search"
            />
            <i class="fa fa-search"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
