
import {useParams} from 'react-router-dom' 

import {onsnap,setDocfun} from './apifirestore'
import"./Rom.css"
import { useEffect, useState } from 'react';
export const Rom = ({Navigate,email})=>{
    const [inputv, setinputv] = useState("")
    const [data,setdata] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const snap = onsnap(setdata,`roms/${id}/content`)

        return snap
    }, [id])
    
    function back() {
        Navigate('/roms')
    }
    function supmet() {
        setinputv("")
        setDocfun(`/roms/${id}/content`,inputv,email)
    }
    return (<>
    <div>
    {data?.map((e,i)=>{
        return(<div key={i} >
        <h4>{e.user}</h4>
        <h2>{e.txt}</h2>
            <br />
            </div>)
    })}

    </div>

    <div className='form' >
        <input type="text" value={inputv} onChange={(e)=>{setinputv(e.target.value)}} />
        <button onClick={()=>{supmet()}} >add</button>
        <button onClick={()=>{back()}} >back</button>
    </div>

    
    </>)
}