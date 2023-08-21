import React from 'react'
import styled from 'styled-components'

//Importaciones propias
import fondo_home from '../images/Laura_1_70.webp';


const Home = () => {
  return (
    <Contenedor_Home className='hero'>
      <div className='background'>
        <img className="bg" src={fondo_home}></img>
      </div>
      <div className='content'>
        <h1 className='top'>PORTFOLIO</h1>
        <div className="centrado-pantalla">
          <p className='titulo'>Laura<br></br>Moya</p>
        </div>
        
        <div className='bottom'>
          <p className='bottom-labels'>DISEÑADORA Y DESARROLLADORA WEB</p>
          <p className='bottom-labels escribeme'><a href ="mailto:moyalaura2@gmail.com" target="_blank"> ESCRIBEME </a> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
</p>
        </div>
      </div>
    </Contenedor_Home>
  )
}

const Contenedor_Home = styled.section`

.background {
  position: relative;
}

.bg {
  position: absolute;
  top: 0; 
  left: 0; 
  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}

@media only screen and (max-width: 768px) {
  .bg {
    opacity: 0.4
  }
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  //margin-top: 5rem;
}

.content {
  height: 100%;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bottom {
  padding: 0 66px;
}

.titulo {
  font-family: 'Bogart', sans-serif;
  font-size: 5.5rem;
  line-height: 8rem;
}

.bottom-labels {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 900 !important;
}

.escribeme {
  background-color: #E55C6F;
  color: #fff;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 16px auto 0 auto;
  border-radius: 999px;
  color: #fff;
  width: fit-content;
}

.escribeme svg {
  width: 24px;
  height: 24px;
}

a {
  cursor: pointer;
}

`

export default Home