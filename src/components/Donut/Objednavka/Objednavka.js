import React from 'react';
import {Modal} from '../../UI/Modal/Modal'
import styles from './Objednavka.module.css'


export const Objednavka = (props) => {
    const obj = props.order
    return(
        <div className={props.showModal === true ? styles.Active : styles.Passive}>
        <Modal show={props.showModal} handleHide={props.hideModal}>
            <div className={styles.Objednavka}>
            <p>Tvoje objednávka je následující, prosím zkontroluj si ji.</p>
            <div>
                {obj.icing.typ && <p><strong>Poleva:</strong> {obj.icing.typ}</p>}
                {obj.topping.typ && <p><strong>Topping:</strong> {obj.topping.typ}</p> }
                {obj.topping.typ && obj.napln.typ && <p><strong>Náplň:</strong> {obj.napln.typ}</p> }
                {props.total && <p className={styles.cena}><strong>Cena: </strong> {props.total} Kč</p>}

                <p className={styles.Pokracovat}>Pokračovat k objednávce?</p>
                <button type="button" onClick={props.hideModal}>Ještě ne</button>
                <button type="button" className={styles.koupit}>Už si objednám</button>
            </div>
            </div>
        </Modal></div>
    )

}