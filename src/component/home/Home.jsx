import "./Home.css";
import Avatar from "./avatar.jpg"
function Home({ isLogin, onLogout }) {
  console.log(isLogin);
  return (
    <div className="Home">
      <div className="Home__Header-book">
        <div className="Home__Header-book__info">
          <h3 className="Home__Header-book__info-status">New Release</h3>
          <h1 className="Home__Header-book__info-name">The Sons of the Empire</h1>
          <p className="Home__Header-book__info-descrip">
            justo habitant at augue ac sed proin consectetur ac urna nias
            justo habitant at augue ac sed proin consectetur ac urna nias
            justo habitant at augue ac sed proin consectetur ac urna nias
          </p>
          <div className="Home__Header-book__info--action">
            <button className="Home__Header-book__info--btn">Buy Now</button>
            <button className="Home__Header-book__info--btn">Read Sample</button>
          
          </div >
        </div>
        <img src={Avatar} alt="imgBook" className="Home__Header-book__img"/>
      </div>
    </div>
  );
}

export default Home;
