import { useState } from "react"
import syles from './pageSelector.module.css'

import About from "./About"
import Contacto from "./Contacto"
import Proyectos from "./Proyectos"

const PageSelector = () => {
  const [pagina, setPagina] = useState('about')

  const setContacto = () => {
    setPagina('contacto')
  }

  const setAbout = () => {
    setPagina('about')
  }

  const setProyectos = () => {
    setPagina('proyectos')
  }

  const selectPage = () => {
    if (pagina === 'about') {
      return <About />
    } else if (pagina === 'proyectos') {
      return <Proyectos />
    } else if (pagina === 'contacto') {
      return <Contacto />
    } else {
      return null
    }
  }

  return (
    <section className={syles.section}>
      <ul>
        <li><button className={pagina === 'about' ? syles.selected : ''} onClick={pagina != 'about' ? setAbout : undefined}>ABOUT</button></li>
        <li><button className={pagina === 'proyectos' ? syles.selected : ''} onClick={pagina != 'proyectos' ? setProyectos : undefined}>PROYECTOS</button></li>
        <li><button className={pagina === 'contacto' ? syles.selected : ''} onClick={pagina != 'contacto' ? setContacto : undefined}>CONTACTO</button></li>
      </ul>
      {selectPage()}
    </section>
  )
}

export default PageSelector