import './Home.css';
import { NavLink } from 'react-router-dom';

function home() {
    return (
        <>
            <div className="home">
                <div className='home__container'>
                    <div className='home__container-nav'>
                        <ul className='home__container-nav--list'>
                            <li className='home__container-nav--item'><NavLink className="home__container-nav--link" to="/home" onClick={this}>Mới Nhất</NavLink></li>
                            <li className='home__container-nav--item'><NavLink className="home__container-nav--link" to="/home" onClick={this}>Bán Chạy</NavLink></li>
                            <li className='home__container-nav--item'><NavLink className="home__container-nav--link" to="/home" onClick={this}>Mới Nhất</NavLink></li>
                            
                            
                            
                        </ul>
                        <div className='home__container-nav--direc'>
                            <ul className='home__container-nav__direc--list'>
                                <li className='home__container-nav__direc--item'>
                                    <NavLink className="home__container-nav__direc--link" to="/home">
                                        <i class="fa fa-angle-left"></i>
                                    </NavLink>
                                </li>
                                <li className='home__container-nav__direc--item'>
                                    <NavLink className="home__container-nav__direc--link" to="/home">
                                        <i class="fa fa-angle-right"></i>
                                    </NavLink>
                                </li>
                                
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default home;