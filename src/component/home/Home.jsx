import "./Home.css";
import { useState, useEffect } from "react";

let random = 0;

function Home() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({
    name: "",
    urlImg: "",
    description: "",
  });
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/get`)
      .then((res) => res.json())
      .then((res) => {
        setBooks(res);
      });
  }, []);
  useEffect(() => {
    const inter = setInterval(() => {
      random = Math.floor(Math.random() * books.length);
      setBook(books[random]);
    }, 8000);

    return () => clearInterval(inter);
  }, [book]);
  return (
    <div className="Home">
      <div className="Home__Header-book">
        {books.map((book, index) => {
          if (index === random)
            return (
              <>
                <div className="Home__Header-book__info">
                  <h3 className="Home__Header-book__info-status">
                    New Release
                  </h3>
                  <h1 className="Home__Header-book__info-name">{book.name}</h1>
                  <p className="Home__Header-book__info-descrip">
                    {book.description ||
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At facere odit reiciendis, vitae, iste ab temporibus eligendi sunt maiores possimus distinctio architecto quisquam natus dolore quam obcaecati pariatur? Ullam, earum?"}{" "}
                  </p>
                  <div className="Home__Header-book__info--action">
                    <button className="Home__Header-book__info--btn-buy">
                      Buy Now
                    </button>
                    <button className="Home__Header-book__info--btn-read">
                      Read Sample
                    </button>
                  </div>
                </div>
                <img
                  src={book.urlImg}
                  alt="imgBook"
                  className="Home__Header-book__img"
                />
              </>
            );
        })}
      </div>
    </div>
  );
}

export default Home;
