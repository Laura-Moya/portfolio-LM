import React from 'react'
import styled from 'styled-components'

//Importaciones propias
import imagen_portatil from '../images/foto_portatil.png';


const About = () => {
  return (
    <Contenedor_About  className='hero'>
      <ul>
        <li><button>ABOUT</button></li>
        <li><button>PROYECTOS</button></li>
        <li><button>CONTACTO</button></li>
        {/*<hr style={{width: '60%', alignContent: 'flex-end'}}></hr>*/}
      </ul>
      <div className='container'>
        <div className="img-portatil">
          <img className="imagen" src={imagen_portatil}></img>
        </div>
        <div className="col">
          <p className='titulo'>Desarrolladora<br></br>Fullstack</p>
          <p>Portfolio </p>
        </div>
      </div>
      
    </Contenedor_About>
  )
}

const Contenedor_About = styled.section`

ul {
  list-style-type: none;
  margin: 0rem 13rem;
  padding: 0;
  overflow: hidden;
  margin-bottom: 5rem;
}

li {
  float: left;
}

button {
  border: 1px solid #d9d9d9;
  border-radius: 2.5rem;
  background-color: white;
  margin-right: 2.5rem;
  width: 8rem;

  padding: 1rem;
  font-size: 1rem;
  font-weight: 800 !important;
  font-family: 'Montserrat', sans-serif;
}

button:hover {
  background-color:pink;
  cursor:pointer;
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  vertical-align: center;
}

.img-portatil {
  margin-top: 4rem;
}

.imagen{
  width: 70%;
  margin: 0rem 13rem;
}

.titulo {
  font-family: 'Bogart',sans-serif;
  font-size: 4.3rem;
  line-height: 6rem;
  margin: 0;
}

`

export default About