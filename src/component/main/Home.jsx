import './Home.css';
import { NavLink } from 'react-router-dom';
import logo from './logo.jpg'

function home() {
    return (
        <>
            <div className="home">
                <div className='home-logo'>
                    <img src={logo} alt="Logo" className="home-logo-img"/>

                </div>
                <div className='home__header'>
                    <div className='home__nav'>
                        <ul className='home__nav--list'>
                            <li className='home__nav--item'><NavLink className="home__nav--link" to="/home" onClick={this}>Mới Nhất</NavLink></li>
                            <li className='home__nav--item'><NavLink className="home__nav--link" to="/home" onClick={this}>Bán Chạy</NavLink></li>
                            <li className='home__nav--item'><NavLink className="home__nav--link" to="/home" onClick={this}>Mới Nhất</NavLink></li>
                            
                            
                            
                        </ul>
                        <div className='home__nav--direc'>
                            <ul className='home__nav__direc--list'>
                                <li className='home__nav__direc--item'>
                                    <NavLink className="home__nav__direc--link" to="/login" onClick={this}>
                                        <i class="fa fa-angle-left btn-direc-page"></i>
                                    </NavLink>
                                </li>
                                <li className='home__nav__direc--item'>
                                    <NavLink className="home__nav__direc--link" to="/login" onClick={this}>
                                        <i class="fa fa-angle-right btn-direc-page"></i>
                                    </NavLink>
                                </li>
                                
                            </ul>

                        </div>
                    </div>
                    <div className='home__container'>
                        <div className='home__container-subnav'>
                                <div className='home__container-subnav--box'>
                                    <i class="fa-solid fa-list-ul"></i>
                                    <h3 className='home__container-subnav--title'>Danh Muc</h3>
                                </div>
                                <ul className='home__container-subna__list'>
                                    <li className='home__container-subna__item'>Truyen Hay</li>
                                    <li className='home__container-subna__item'>Truyen thieu nhi</li>
                                    <li className='home__container-subna__item'>Truyen van hoc</li>
                                </ul>
                        </div>
                        <div className='home__container-content'>
                                
                         </div>
                        

                    </div>

                </div>
            </div>
        </>
    );
}

export default home;