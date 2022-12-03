import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import filtros from './filtros.json'
import styles from '../filtros/filtros.module.scss'

type Iitem = typeof filtros[0] ;

interface props {
  statefiltro: number | null
  setfiltro: React.Dispatch<React.SetStateAction< number | null>>

}

export default function Filtros({statefiltro , setfiltro}: props) {
    function selecionaFiltro(item: Iitem) {
       if(item.id ===statefiltro) return setfiltro(null);
       
       return setfiltro(item.id)
      
    }
  return (
    <div className={styles.filtros}>{filtros.map((item)=>(
        <button className={`${styles["filtros__filtro"]} ${ item.id === statefiltro  ? styles["filtros__filtro--ativo"] :"" }`} key={item.id} onClick={()=> selecionaFiltro(item)}>{item.label}</button>
    ))}</div>
  )
}
