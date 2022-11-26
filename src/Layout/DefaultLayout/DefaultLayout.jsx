import { Header, Footer } from "../../component";
import "./DefaultLayout.css";
// import Books from '../books';
function DefaultLayout({ children, isLogin, onHandleLogout }) {
        console.log(isLogin)
      return (
      <>
              <Header isTrue={isLogin} onLogOut={onHandleLogout}/>
              <div className='DefaultLayout--content'>
              {children}
              </div>
              <Footer />
      </>
       );

}

export default DefaultLayout;
