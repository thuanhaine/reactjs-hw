import React , {  useState } from "react";

function HandleIsLogin()  {
    const [isLogin, setIslogin] = useState(false);

   const  handdleLogin = () => {
    setIslogin(true)
   }
   const  handdleLogout = () => {
    setIslogin(false)
   }

   return {
    isLogin,
    handdleLogin,
    handdleLogout
   }
}
 
export default HandleIsLogin