import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { publichRoutes, privateRoutes } from "./routes";
import DefaultLayout from "./Layout/DefaultLayout";



function App() {
  const [isLogin, setIslogin] = useState(false);

  const handleLogin = () => {
    setIslogin(true);
  };

  // const handleLogout = () => {
  //   setIslogin(false);
  // };


  console.log(privateRoutes);
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
        console.log(Page)
        console.log(">>>", Layout)
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page isLogin={isLogin}/>
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
        console.log(Page)
        console.log(">>>", Layout)
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
