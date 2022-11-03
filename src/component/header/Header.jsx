
import './Header.css'
// import '../reponsiveCss/Reponsive.css'
import { NavLink } from 'react-router-dom';


function header() {
    return (
        <>
        <div className="header">
        
        <div className='nav-left'>
            <ul className="nav-list">
                <li className='nav-list__item'><NavLink className="nav-link" to="/home" onClick={this}>Home</NavLink></li>
                <li className='nav-list__item'><NavLink className="nav-link" to="/product" onClick={this}>Product</NavLink></li>
                <li className='nav-list__item'><NavLink className="nav-link" to="/about" onClick={this}>About</NavLink></li>
                <li className='nav-list__item'><NavLink className="nav-link" to="/contact" onClick={this}>Contact</NavLink></li>
                
            </ul>
            <div className="search-btn">
                <i className="search-icon ti-search"></i>
              </div>
        </div>
        <div className="nav-right">

            <ul className="nav-list">
                <li className='nav-list__item'><NavLink className="nav-link" to="/login" onClick={this}>Login</NavLink></li>
            </ul>

        </div>
       
      </div>
      </>
    )
}

export default header;