import { useState } from 'react'
import Anuncio from '/home/anuncio';
import Home from '/home/home';
import Cabecera from '/home/cabecera';
import Navegador from '/home/navegador';
import './App.css'
import FondoT from './components/FondoT'
import Recomendacion from './components/Recomendacion';
import {fondoT} from './assets/APIfondo'

function App() {
  const [count, setCount] = useState(0)
  
      return(
        <>
              <Anuncio />
              <Recomendacion />
              <Home/>
              
              <Cabecera/>
              <Navegador/>
              

        </>
        
      )
}

  
  


export default App
