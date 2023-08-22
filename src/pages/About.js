import React, { useState } from 'react'
import syles from './about.module.css'

//Importaciones propias
import imagen_portatil from '../images/foto_portatil.png';


const About = () => {

  return (
    <div className={syles.container}>
      <img className={syles.imagen} src={imagen_portatil}></img>
      <div className={syles.col}>
        <p className={syles.titulo}>Desarrolladora<br></br>Fullstack</p>
        <p>Portfolio </p>
      </div>
    </div>
  )
}

export default About