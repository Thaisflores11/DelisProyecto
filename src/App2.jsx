import React from 'react'
import FondoT from './components/FondoT'
import {fondoT} from './assets/APIfondo'
import './App2.css'
function App2() {
  return (
    <>
    {
      fondoT.map(fondoo=>{
        return(
          
          <FondoT fondoT={fondoo}>
          
          </FondoT>
        )
      })
      
    } 
    
      
      
    </>
  )
}

export default App2
