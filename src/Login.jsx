import "./login.css";
import {
  createUserWithEmailAndPasswordd,
  onAuthStateChangeding,
  signingInWithEmailAndPassword,
} from "./apiauth";
import { useEffect, useState } from "react";
export const Login = ({setemail,email,Navigate}) => {
    const [inputv,setinputv] = useState(["",""]);
  const [warning, setwarning] = useState("");

  useEffect(() => {
    if (warning !== "") {
      setwarning("");
    }
    
  }, [inputv]);
  
  useEffect(() => {
    onAuthStateChangeding(setemail);
    if (email !== "") {
      Navigate("/roms")
    }
  }, [email]);

  function create() {
    if (inputv[0] !== "" && inputv[1] !== "") {
      createUserWithEmailAndPasswordd(inputv,setemail,setwarning);
    } else {
      setwarning("input field Empty");
    }
  }



  function signin() {
    if (inputv[0] !== "" && inputv[1] !== "") {
         signingInWithEmailAndPassword(inputv,setemail,setwarning)
      } else {
        setwarning("input field Empty");
      }
    
  }
  return (
    <>
      <div className="barnt-">
        <div className="box-div">
          <h1 className="h1">Chat Rooms</h1>
          <input
            type="text"
            value={inputv[0]}
            onChange={(e) => {
              setinputv([e.target.value, inputv[1]]);
            }}
            placeholder="Email"
          />
          <input
            type="Password"
            value={inputv[1]}
            onChange={(e) => {
              setinputv([inputv[0], e.target.value]);
              
            }}
            placeholder="Password"
          />
          <a href="#" onClick={()=>{signin()}} >log in</a>
          <a href="#" onClick={()=>{create()}}>
            new account
          </a>
          <h4 className="warning">{warning}</h4>
        </div>
      </div>
    </>
  );
};
