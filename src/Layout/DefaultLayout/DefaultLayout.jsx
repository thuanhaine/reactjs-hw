import { Header, Footer } from "../../component";
import "./DefaultLayout.css";
// import Books from '../books';
function DefaultLayout({ children, isLogin }) {
      return (
      <>
              <Header isTrue={isLogin}/>
              <div className='DefaultLayout--content'>
              {children}
              </div>
              <Footer />
      </>
       );

}

export default DefaultLayout;
