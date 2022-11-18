import Page1 from "./page1/Page1";
import { NavLink } from "react-router-dom";
import './Books.css'

function Books() {
  return (
    <>
      <div className="book">
        <div className="book__header">
          <div className="book__nav">
            <ul className="book__nav--list">
              <li className="book__nav--item">
                <NavLink className="book__nav--link" to="/book" onClick={this}>
                  Mới Nhất
                </NavLink>
              </li>
              <li className="book__nav--item">
                <NavLink className="book__nav--link" to="/book" onClick={this}>
                  Bán Chạy
                </NavLink>
              </li>
              <li className="book__nav--item">
                <NavLink className="book__nav--link" to="/book" onClick={this}>
                  Giảm Giá
                </NavLink>
              </li>
            </ul>
            <div className="book__nav--direc">
              <ul className="book__nav__direc--list">
                <li className="book__nav__direc--item">
                  <i class="fa fa-angle-left btn-direc-page"></i>
                </li>
                <li className="book__nav__direc--item">
                  <i class="fa fa-angle-right btn-direc-page"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="book__container">
            <div className="book__container-subnav">
              <div className="book__container-subnav--box">
                <i class="fa-solid fa-list-ul"></i>
                <h3 className="book__container-subnav--title">Danh Muc</h3>
              </div>
              <ul className="book__container-subna__list">
                <li className="book__container-subna__item">Truyen Hay</li>
                <li className="book__container-subna__item">
                  Truyen thieu nhi
                </li>
                <li className="book__container-subna__item">Truyen van hoc</li>
              </ul>
            </div>
            <div id="book__container-content">
              <Page1 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Books;
