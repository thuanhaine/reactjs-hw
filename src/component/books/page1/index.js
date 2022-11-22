import "./Page1.css";
import { useState, useEffect } from "react";

function Page1({ page }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://resfulapitest.herokuapp.com/api/get")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);
  return (
    <>
      <ul className="product-list">
        {books.map((book, index) => {
          if ((page - 1) * 8 <= index && index < page * 8) {
            return (
              <li className="product-item" key={index}>
                <img
                  className="product-img"
                  src={book.urlImg}
                  alt="product img"
                />
                <div className="product-info">
                  <p className="product-name">{book.name}</p>
                  <p className="product-author">
                    Tác giả:{" "}
                    <strong>{book.author || "Đang cập nhật ..."}</strong>
                  </p>
                  <p className="product-price">
                    Giá <strong>{book.price}đ</strong>
                  </p>
                  <p className="product-available">
                    {book.availableNumber
                      ? `Còn: ${book.availableNumber} quyển`
                      : "Hết Hàng !"}
                  </p>
                  <p className="product-soldNumber">
                    {book.soldNumber
                      ? `Đã bán: ${book.soldNumber} quyển`
                      : "Chưa bán được gì !"}
                  </p>
                </div>
                <button className="product-btn-buy">Buy</button>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}
export default Page1;
