import"./Roms.css"
import {Outlet } from 'react-router-dom'

import {Header} from './Header' 

export const Roms = ({email,setemail,Navigate})=>{



    
    

    return (<>
        <Header email={email} setemail={setemail} Navigate={Navigate} />
        
      <Outlet/>
    </>)
}