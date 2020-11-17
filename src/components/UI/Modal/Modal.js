import React from 'react';
import styles from './Modal.module.css'

export const Modal = (props) => {
    return(
        <div className={styles.modal}>
            {props.children}
        </div>
    )
}