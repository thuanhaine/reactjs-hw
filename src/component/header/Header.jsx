
import './Header.css'
// import '../reponsiveCss/Reponsive.css'
import { NavLink } from 'react-router-dom';


function header() {
    return (
        <>
        
        <div className="header">
            
            <div className='nav-left'>
                <ul className="nav-list">
                    <li className='nav-list__item'><NavLink className="nav-link" to="/home" onClick={this}>Trang chủ</NavLink></li>
                    <li className='nav-list__item'><NavLink className="nav-link" to="/about" onClick={this}>Thông Tin</NavLink></li>
                    <li className='nav-list__item'><NavLink className="nav-link" to="/contact" onClick={this}>Liên Hệ</NavLink></li>
                    
                </ul>
            </div>
        
            <div className="search-btn">
                        <input className="search-input" type="search" placeholder="search" />
                        <i class="fa-solid fa-magnifying-glass"></i>
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