import React from 'react'
import styled from 'styled-components'

//Importaciones propias
import fondo_home from '../images/Laura_1_70.png';


const Home = () => {
  return (
    <Contenedor_Home >
      <img class="bg" src={fondo_home}></img>
      
      <h1>PORTFOLIO</h1>
      <div class="centrado-pantalla">
        <p class='titulo'>Laura<br></br>Moya</p>
      </div>
      
      <div className='bottom'>
        <p className='bottom-labels'>DISEÑADORA Y DESARROLLADORA WEB</p>
        <p className='bottom-labels'>ESCRIBEME</p>
      </div>
      
    </Contenedor_Home>
  )
}

const Contenedor_Home = styled.section`
.bg {
  position: fixed; 
  top: 0; 
  left: 0; 
  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
  z-index: -100;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  margin-top: 5rem;
}

.titulo {
  font-family: 'Bogart', sans-serif;
  font-size: 5.5rem;
}

.centrado-pantalla {
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* position the div in center */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  bottom: 9rem;
  width: 100%;
}

.bottom-labels {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 900 !important;
}
`

export default Home