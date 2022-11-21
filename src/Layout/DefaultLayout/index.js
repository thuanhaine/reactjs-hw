import {Header, Footer} from '../../component'
import './DefaultLayout.css'
// import Books from '../books';
function DefaultLayout({ children }) {
    console.log(children)
    return ( 
    <>
            <Header />
            <div className='DefaultLayout--content'>
            {children}
            </div>
            <Footer />
    </>
     );
}

export default DefaultLayout;