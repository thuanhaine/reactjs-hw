import "./Header_user.css";
import {NavLink} from "react-router-dom"
function Header_user() {
  return (
    <>
      {" "}
      <div className="Header_user-icon">
         <NavLink to='/cart' onClick={this}><i className="fa fa-shopping-cart"></i></NavLink>
        
        <i className="fa fa-user" onClick={this}>
          <ul className="user__list">
            <span className="user__list-item-name">Thuan Hai</span>
            <li className="user__list-item user__list-item--money">
              <p className="user__list-item--money-p">
                So du: <strong>10000</strong>d
              </p>
            </li>
            <li ><NavLink className="user__list-item" to="/thongtin">Thong Tin</NavLink></li>
            <li ><NavLink className="user__list-item" to="/qluser" onClick={this}>Quan ly tai khoan</NavLink></li>
            <li ><NavLink className="user__list-item" to="/doimatkhau">Doi mat khau</NavLink></li>
            <li ><NavLink className="user__list-item" to="/">Dang Xuat</NavLink></li>
          </ul>
        </i>
      </div>
    </>
  );
}

export default Header_user;
