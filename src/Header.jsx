import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    signingOut,
  } from "./apiauth";
  import"./Roms.css";
  export const Header = ({email,setemail,Navigate})=>{

  useEffect(() => {
    const th = setTimeout(() => {
      if (email === "") {
        Navigate('/')
      }
    }, 0);


  
    return () => {
      clearTimeout(th)
    }
  }, [email])
  
  
  
    function signOut() {
        signingOut(setemail);
       
      }
    return (<>
        <header className="header" >
    <h2>{email}</h2>
    <Link  onClick={()=>{signOut()}} to="/" className="logout" >log out</Link>
    </header>
    </>)
}
