import { useState } from 'react'

import Home from '/home/home';
import Cabecera from '/home/cabecera';
import Navegador from '/home/navegador';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Cabecera/>
      <Navegador/>
       
    </>
  )

}

export default App
