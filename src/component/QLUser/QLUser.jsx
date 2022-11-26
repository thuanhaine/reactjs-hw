import "./QLUser.css";
import { useState } from "react";
import defaulyAvatar from './user.svg'
function QLUer() {
  const [listUser, setListUser] = useState([]);
  const [numberShow, setNumberShow] = useState(10);
  fetch(`${process.env.REACT_APP_API}/api/getUser`)
    .then((res) => res.json())
    .then((res) => {
      setListUser(res);
    });
  return (
    <>
      <h1 className="qluser-title">Quan Ly Thong Tin User</h1>
      <div className="qluse--container">
        <ul className="qluser__list">
          {listUser.map((user, index) => {
            if(index < numberShow)
                return (
                    <li key={user.id} className="qluser__list-item">
                    <img
                      src={user.urlAvatar || defaulyAvatar}
                      alt="imgUser"
                      className="qluer__list-item--avatar"
                    />
                    <div className="qluser__list-item--container">
                      <p className="qluser__list-item__name">
                        {" "}
                        User Name: <strong>{user.name}</strong>
                      </p>
                      <p className="qluser__list-item__password">
                        {" "}
                        User Password: <strong>{user.password}</strong>
                      </p>
                      <p className="qluser__list-item__email">
                        {" "}
                        User Email: <strong>{user.email}</strong>
                      </p>
                      <p className="qluser__list-item__role">
                        {" "}
                        User Role: <strong>{user.role}</strong>
                      </p>
                      <p className="qluser__list-item__date">
                        {" "}
                        User Date Create: <strong>{user.dateCreate}</strong>
                      </p>
                    </div>
                    <div className="qluser__list-item__active">
                      <button className="qluser__list-item__active-edit qluser-activer">
                        Edit
                      </button>
                      <button className="qluser__list-item__active-delete qluser-activer">
                        Delete
                      </button>
                    </div>
                  </li>
                )
          }
           )}
        </ul>
        <div className="qluser__footer">

              <span className="qluser-showmore" onClick={() => setNumberShow(numberShow + 10)}>Xem them</span>
        </div>
      </div>

    </>
  );
}

export default QLUer;
