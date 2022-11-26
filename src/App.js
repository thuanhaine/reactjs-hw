import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { publichRoutes, privateRoutes } from "./routes";
import {DefaultLayout} from "./Layout";


function App() {
  const [isLogin, setIslogin] = useState({
    status: false,
    userName: ''
  });



  const handleLogin = (data) => {
    setIslogin({
      status: true,
      userName: data.name
    });
    // localStorage.setItem('userName',userName )
  };
  console.log(isLogin)
  const handleLogout = () => {
    setIslogin({
      status: false,
      userName: ""
    });
    // localStorage.removeItem('userName',userName)
  };

  
  return isLogin.status ? (
      <Routes>
      {privateRoutes.map((route, index) => {
        let Layout = DefaultLayout;
        if (route.layout === null) {
          Layout = Fragment;
        } else if (route.layout) {
          Layout = route.layout;
        }
        const Page =  route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout isLogin={isLogin} onHandleLogout={handleLogout}>
                <Page  isLogin={isLogin}/>
                </Layout>
            }
          />
        );
      })}
    </Routes>
  ) : (
    <Routes>

      {publichRoutes.map((route, index) => {
        let Layout = DefaultLayout;
        if (route.layout === null) {
          Layout = Fragment;
        } else if (route.layout) {
          Layout = route.layout;
        }
        const Page = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page onLogin={handleLogin}/>
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
