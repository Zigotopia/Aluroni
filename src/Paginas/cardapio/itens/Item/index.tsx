import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import logo from '../../../../assets/imgs/logo.svg'
import styles from  './item.module.scss' 
import itens from '../itens.json'
import classNames from 'classnames'

type props = typeof itens[0] // como estou lidando com o json é importante dizer qual a posição da item ja que se não entenderia como um array de objeto

export default function Item(props : props) {
  return (
    <div className={styles.item}>
        <div className={styles.item__imagem}>
            <img src={props.photo} alt="Imagem de uma comida do cardapio" />
        </div>
        <div className={styles.item__descricao}>
            <div className={styles.item__titulo}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <div className={styles.item__tags}>
                <div className={classNames({
                    [styles.item__tipo] : true,
                    [styles[`item__tipo__${props.category.label.toLowerCase()}`]]: true
                })}>{props.category.label}</div>
                <div className={styles.item__porcao}>{props.size}g</div>
                <div className={styles.item__qtdpessoas}>serve {props.serving} pessoa{props.serving ===1 ? "" : "s"}</div>
                <div className={styles.item__valor}>R${props.price.toFixed(2)}</div>
            </div>    
        </div>
            
       
    
        
    </div>

  )
}
