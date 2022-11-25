import { useEffect, useState } from 'react';
import { addDocfun ,onsnap} from './apifirestore'
export const RomsContent = ({Navigate,email})=>{
  const [inputv,setinputv] = useState("")
  const [data,setdata] = useState([])


  useEffect(() => {
    const snap = onsnap(setdata,"roms")
  
    return snap
  }, [])
  console.log(data);

    function Entringrome(id) {
      Navigate(`/roms/${id}`)

      }
      function newrome() {
        
        addDocfun(inputv,email,Navigate)
      }

    return (<>
    
    <section>
      <div>
{data.map((e,i)=>{
  console.log(e);
  return (

  <div className="rome-bnal" key={i} id={i+1}>
    <h3> rome name : {e.romName} </h3> 
    <h4>rome id : {e.romid}</h4>
    <h4>rome creator id : {e.user}</h4>
    <button onClick={()=>{Entringrome(e.romid)}} >enter</button>
  </div>

  )
})
}

  <div className="rome-bnal" id={0}>
    <h1 > add rom</h1>
    <input type="text" placeholder='rome name' className='input' value={inputv} onChange={(e)=>{setinputv(e.target.value)}} />
    <button onClick={()=>{newrome()}}  >enter</button>
   </div>

      </div>

    </section>
    
    </>)
}