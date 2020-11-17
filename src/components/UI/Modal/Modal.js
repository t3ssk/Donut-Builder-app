import React from 'react';
import styles from './Modal.module.css'
import {Backdrop} from '../Backdrop/Backdrop'

export const Modal = (props) => {
    return(
        <React.Fragment>
        <Backdrop show={props.show} handleHide={props.handleHide}/>
        <div className={styles.Modal}>
            <h2>Skvělá volba!</h2>
            {props.children}
        </div>
        </React.Fragment>
    )
}