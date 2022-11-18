import ImgProduct from "../../img/girl.jpg";
import "./Page1.css";
import { useState, useEffect } from "react";

function Page1() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/api/get")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
      });
  }, []);

  return (
    <>
      <ul className="product-list">
        {books.map((book) => (
          <li className="product-item" key={book.id}>
            <img className="product-img" src={book.urlImg} alt="product img" />
            <div className="product-info">
              <p className="product-name">{book.name}</p>
              <p className="product-author">
               Tác giả: <strong>{book.author || "Đang cập nhật ..."}</strong>
              </p>
              <p className="product-price">Giá <strong>{book.price}đ</strong></p>
              <p className="product-available">{book.availableNumber ? `Còn: ${book.availableNumber} quyển` : "Hết Hàng !" }</p>
              <p className="product-soldNumber">{book.soldNumber ? `đã bán: ${book.soldNumber} quyển` : "Chưa bán được gì !" }</p>
            </div>
            <button className="product-btn-buy">Buy</button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Page1;
