import React from 'react'
import styles from './buscador.module.scss'
import {CgSearch} from 'react-icons/cg' //  isso aqui funciona da seguinte forma : cg é a pasta do icone enquanto o Seach o icone que procuramos. Funciona como componente entao temos que importar como componente

interface setBusca {
    busca: string
    setBusca: React.Dispatch<React.SetStateAction<string>>

}

export default function Buscador({ busca, setBusca }: setBusca) {
    return (
        <div className={styles.buscador}>
            < input
                type="text"
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
                placeholder={"Buscar"}
            />
            <CgSearch
            size={20}
            color="gray"/> 
        </div>
    )
}
