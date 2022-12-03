import React, { useState } from 'react'
import styles from './ordenador.module.scss'
import opções from './ordenador.json'
import classNames from 'classnames'
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface props {
    ordenador: string;
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador({ordenador, setOrdenador}:props) {
    const [aberto, setAberto] = useState(false)
    const nomeOrdenado = ordenador && opções.find(opção => opção.value === ordenador)?.nome
    return (
        <button
            className={classNames({
                [styles.ordenador]:true,
                [styles["ordenador--ativo"]]:ordenador !== "",  
            })}
            onClick={() => setAberto(!aberto)}
            onBlur={() => setAberto(false)}
        >
            <span>{nomeOrdenado|| "Classificar por"}</span>
            {aberto ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown size={20} />} 
            <div className={classNames({
                [styles.ordenador__options]: true,
                [styles["ordenador__options--ativo"]]: aberto
            })}>{opções.map(opção => (
                <div className={styles.ordenador__option} onClick={()=>setOrdenador(opção.value)}>{opção.nome}</div>
            ))}</div>
        </button>)
}

