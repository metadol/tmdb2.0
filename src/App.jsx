import { useEffect, useState } from 'react'
import { fetchData } from './utils/api'

function App() {


  useEffect(() => {
    apiTest();
  }, [])

  const apiTest=async()=>{
    fetchData('/movie/popular').then((res)=>console.log(res))

  }
  
  return (
    <>
      App
    </>
  )
}

export default App
