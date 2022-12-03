import React from 'react'
import styles from "../cardapio/Cardapio.module.scss"
import { ReactComponent as Logo } from '../../assets/imgs/logo.svg' // Quando eu faço dessa forma eu importto a propria imagem como componente react. Desse modo o proprio react cria um svg
import { useState } from 'react'
import Buscador from './Buscador/index.tsx'
import Filtros from './filtros/index.tsx'
import Ordenador from './Ordenador/index.tsx'
import Itens from './itens/index.tsx'

export default function Cardapio() {
 const [busca, setBusca] = useState("")
 const [filtro, setFiltro] = useState<number | null>(null) // usestate utilizado para alterar a cor dos botões quando ativo ou nao ativo o filtro
 const [ordenador ,setOrdenador] =useState("")
 
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}> A casa do código e da Massa</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardapio</h3>
        <Buscador busca={busca} setBusca={setBusca}/>
        <div className={styles.cardapio__filtros}>
          <Filtros statefiltro={filtro} setfiltro={setFiltro}/>
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
        </div>
        <Itens busca ={busca} filtro={filtro} ordenador={ordenador}/>

      </section>

     
    </main>

  )
}
