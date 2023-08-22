import React from 'react'
import styles from './home.module.css'

//Importaciones propias
import fondo_home from '../images/Laura_1_70.webp';

const Home = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img className={styles.bg} src={fondo_home}></img>
      </div>
      <div className={styles.content}>
        <h1 className={styles.top}>PORTFOLIO</h1>
        <div>
          <p className={styles.titulo}>Laura<br></br>Moya</p>
        </div>

        <div className={styles.bottom}>
          <p className={styles.bottom_labels}>DISEÑADORA Y DESARROLLADORA WEB</p>
          <a className={styles.escribeme} href="mailto:moyalaura2@gmail.com" target="_blank">ESCRIBEME
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
