
import './Header.css'
import '../reponsiveCss/Reponsive.css'
import { NavLink } from 'react-router-dom';


function header() {
    return (
        <>
        <div className="header">
        {/* <!-- Begin Nav  --> */}
        <ul id="nav">
          <li><NavLink className="nav-link" to="/home" onClick={this}>Home</NavLink></li>
          <li><NavLink className="nav-link" to="/home" onClick={this}>Product</NavLink></li>
          <li><NavLink className="nav-link" to="/home" onClick={this}>About</NavLink></li>
          <li><NavLink className="nav-link" to="/home" onClick={this}>Contact</NavLink></li>
          <li><NavLink className="nav-link" to="/login" onClick={this}>Login</NavLink></li>
          
        </ul>
        {/* <!-- End Nav  --> */}

        {/* <!-- Begin Search  --> */}
        <div className="search-btn">
          <i className="search-icon ti-search"></i>
        </div>
        <div id="mobile-menu" className="mobile-menu-btn">
          <i className="menu-icon ti-menu"></i>
        </div>
        {/* <!-- End Search  --> */}
      </div></>
    )
}

export default header;