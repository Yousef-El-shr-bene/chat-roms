import './App.css';
import { Routes,Route, useNavigate } from 'react-router-dom'

import {Login} from "./Login"
import { useState } from 'react';
import {Roms} from './Roms'
import {Rom} from './Rom'
import {RomsContent} from './RomsContent'
function App() {
  const [email,setemail] = useState("")
  const Navigate = useNavigate()

  return(
    <div className="App">

      <Routes>
      <Route path='/' element={<Login setemail={setemail} email={email} Navigate={Navigate} />}  />
      <Route  path='/roms' element={<Roms setemail={setemail} email={email} Navigate={Navigate} />}  >

      <Route path='' element={<><RomsContent Navigate={Navigate} email={email} /></>}  />
      <Route path=':id' element={<Rom Navigate={Navigate} email={email} />}  />

      </Route>
      </Routes>
    </div>
  );
}

export default App;
//logic
//cecurty rols
//desine
