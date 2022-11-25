import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { publichRoutes, privateRoutes } from "./routes";
import {DefaultLayout} from "./Layout";


function App() {
  const [userName, setUserName] = useState('')
  const [isLogin, setIslogin] = useState(false);



  const handleLogin = (data) => {
    setIslogin(true);
    setUserName(data.name)
    console.log("data name " + data.name);
    // localStorage.setItem('userName',userName )
  };
  console.log("User Name " + userName);

  const handleLogout = (data) => {
    setIslogin(false);
    setUserName(data.name)
    // localStorage.removeItem('userName',userName)
  };

  
  return isLogin ? (
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
              <Layout isLogin={isLogin} onLogout={handleLogout}>
                <Page  onLogout={handleLogout}/>
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
