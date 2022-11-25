import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    onSnapshot,
    query,
    orderBy,
    setDoc,
    serverTimestamp
  
} from "firebase/firestore"

const firebaseConfig = {

    apiKey: "AIzaSyC5Fz4Wmlem6XgEklY6NtZPxzrebszSxBg",
  
    authDomain: "chat-rooms-app-a4711.firebaseapp.com",
  
    projectId: "chat-rooms-app-a4711",
  
    storageBucket: "chat-rooms-app-a4711.appspot.com",
  
    messagingSenderId: "232939402236",
  
    appId: "1:232939402236:web:28d2f9d4b761957b693879",
  
    measurementId: "G-ZKVJNDNWTY"
  
  };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app)
    const colRefRoms = collection(db,"roms")

  function colRefRom(romid) {
    const colik = collection(db,romid)
   return colik

  }

  async function setDocfun(path,txt,email) {
    const docRef = await collection(db, path)
    await addDoc(docRef,{ txt: txt, user:email ,Timestamp: serverTimestamp() })
  } 

  async function addDocfun(romName,email,Navigate) {
    let hh = serverTimestamp()
    console.log(hh);
    const docRef = doc(db,"roms",`${email}-${romName}`)
    await setDoc(docRef,{ romName: romName, romid:`${email}-${romName}`,user:email, Timestamp: serverTimestamp() }).then(()=>{
      Navigate(`/roms/${email}-${romName}`)
    })
  } 
  //
  //
  const onsnap = (setdata,col) => {
    const colRefRoms = collection(db,col)
    const  q = query(colRefRoms,orderBy("Timestamp","desc"))
    onSnapshot(q, (snap) => {
      let box = [];
      snap.docs.forEach((doc) => {
        console.log(doc.data());
        box.push({ ...doc.data(), id: doc.id });
        setdata(box);
        console.log(box);
      });
    });
  };

export {colRefRoms,colRefRom,setDocfun,addDocfun,onsnap}