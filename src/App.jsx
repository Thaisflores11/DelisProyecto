import { useState } from 'react'
import Carrucel2 from '/home/carrucel2';
import Cabecera from '/home/cabecera';
import Carrucel1 from '/home/carrucel1';



import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
  
      
     <Carrucel1/>
      <Carrucel2/>
      <Cabecera/>
      
       
    </>
  )
}

export default App
