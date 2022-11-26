import "./Header_user.css";
import {NavLink} from "react-router-dom"
import { useState, useEffect } from "react"
function Header_user({isUser, onLogOut2}) {

  const [user, setUser] = useState({
    role: ''
  })


  useEffect(() => {
  fetch(`${process.env.REACT_APP_API}/api/getOneUser`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(isUser),
  })
  .then(res => res.json())
  .then(res => {
    setUser(res)
  })
  },[])
  console.log(user.role)
  return (
    <>
      {" "}
      <div className="Header_user-icon">
         <NavLink to='/cart' onClick={this}><i className="fa fa-shopping-cart"></i></NavLink>
        
        <i className="fa fa-user" onClick={this}>
          <ul className="user__list">
            <span className="user__list-item-name">Thuan Hai</span>
            <li ><NavLink className="user__list-item" to="/inforuser">Thong Tin</NavLink></li>
            {user.role === "Admin" ? <li ><NavLink className="user__list-item" to="/qluser" onClick={this}>Quan ly User</NavLink></li> : <></>}
            <li ><NavLink className="user__list-item" to="/doimatkhau">Doi mat khau</NavLink></li>
            <li ><NavLink className="user__list-item" onClick={onLogOut2} to="/">Dang Xuat</NavLink></li>
          </ul>
        </i>
      </div>
    </>
  );
}

export default Header_user;
