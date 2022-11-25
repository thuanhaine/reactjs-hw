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
            <li className="user__list-item">Thong Tin</li>
            <li className="user__list-item">Doi mat khau</li>
            <li className="user__list-item">Dang Xuat</li>
          </ul>
        </i>
      </div>
    </>
  );
}

export default Header_user;
