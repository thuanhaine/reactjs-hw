import "./Home.css";
function Home() {

  return (
    <div className="Home">
      <div className="Home__Header-book">
        <div className="Home__Header-book__info">
          <h3 className="Home__Header-book__info-status">New Release</h3>
          <h1 className="Home__Header-book__info-name">
            The Sons of the Empire
          </h1>
          <p className="Home__Header-book__info-descrip">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et aliquam
            fugit dignissimos delectus alias labore mollitia aspernatur nam
            adipisci exercitationem, qui, voluptatem ipsum ullam consequatur
            odit corrupti at, quas reiciendis!
          </p>
          <div className="Home__Header-book__info--action">
            <button className="Home__Header-book__info--btn-buy">Buy Now</button>
            <button className="Home__Header-book__info--btn-read">
              Read Sample
            </button>
          </div>
        </div>
        <img src="https://bhttvn.com/public/uploads/demo/huong-vi-cua-em/huong-vi-cua-em-la-chut-ngot-ngao-lang-man.jpg" alt="imgBook" className="Home__Header-book__img" />
      </div>
    </div>
  );
}

export default Home;
