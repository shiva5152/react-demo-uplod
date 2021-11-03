import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [Data,setData]=useState([]);
  const [loading,setloading]=useState(true);
  const removeTour=(id)=>{
  const newData=Data.filter((x)=>x.id!==id);
  setData(newData)
  }

 
  useEffect(() => {
    axios(url)
    .then((response)=>{
    
    setData(response.data)
    setloading(false)
    })
    .catch((error)=>{
      console.log(error)
      setloading(false)
    })
    
  },[]);
  

  if(loading){
    return <><main>
      <Loading />
    </main></>
  }
  // if(Data.length=== 0){
  //   <div className="title">
  //     <h2>no tours left</h2>
     
  //   </div>
  // }
  
  return <Tours props={Data} removeTour={removeTour}/>
}

export default App
