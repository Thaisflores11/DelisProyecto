import { useState } from 'react'

import Home from '/home/home';
import Cabecera from '/home/cabecera';
import './App.css'
import FondoT from './components/FondoT'
import {fondoT} from './assets/APIfondo'

function App() {
  const [count, setCount] = useState(0)
  
      return(
        <>
        {
          fondoT.map(fondoo=>{
            return(
              
              <FondoT fondoT={fondoo}>
              <Home/>
              <Cabecera/>

              
              </FondoT>
            )
          })
        } 
          
          
        </>
        
        
      )
}

export default App
