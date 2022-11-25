// Import the functions you need from the SDKs you need

import { initializeApp, } from "firebase/app";

import { getAnalytics } from "firebase/analytics";



import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged
  } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyC5Fz4Wmlem6XgEklY6NtZPxzrebszSxBg",

  authDomain: "chat-rooms-app-a4711.firebaseapp.com",

  projectId: "chat-rooms-app-a4711",

  storageBucket: "chat-rooms-app-a4711.appspot.com",

  messagingSenderId: "232939402236",

  appId: "1:232939402236:web:28d2f9d4b761957b693879",

  measurementId: "G-ZKVJNDNWTY"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

//        auth
const auth = getAuth();

function createUserWithEmailAndPasswordd(emeilandpassword,setemail,setwarning) {
    createUserWithEmailAndPassword(auth, ...emeilandpassword)
      .then((user) => {
        setemail(user.user.email)
        console.log(user.user.email,11);
      })
      .catch((err) => {
        console.log(err);
        setwarning("thamsing rong with email or Password")
      });
  }

  function onAuthStateChangeding(setemail){
    onAuthStateChanged(auth,(user)=>{
      console.log("thumsing habend",user);
      if (user !== null) {
        setemail(user.email)
        console.log(user.email,12);
      }
    })
  }

  function signingOut(setemail) {
    signOut(auth)
      .then(() => {
        setemail("")
        console.log("",13);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function signingInWithEmailAndPassword(emeilandpassword,setemail,setwarning) {
    signInWithEmailAndPassword(auth, ...emeilandpassword)
      .then((user) => {
        setemail(user.user.email)
        console.log(user.user.email,14);
        console.log("aaaaaaaaaaaaaaaaaaaaaa");
      })
      .catch((err) => {
        console.log(err);
        setwarning("thamsing rong with email or Password")
      });
  }
  

  export {createUserWithEmailAndPasswordd,onAuthStateChangeding,signingOut,signingInWithEmailAndPassword}