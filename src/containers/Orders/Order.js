import React from 'react'
import _ from 'lodash'
import styles from './Order.module.css'
 
const Order = (props) => {
    return  (<div className={styles.Order}>
        <h4>Objednávka č. {_.random(1, 9000)}</h4>
        <p><strong>Poleva: </strong>{_.capitalize(props.icing)}</p>
        <p><strong>Topping: </strong>{_.capitalize(props.topping)}</p>
        <p><strong>Náplň: </strong>{_.capitalize(props.napln)}</p>
        <p className={styles.Total}><strong>Cena: </strong>{props.total} Kč</p>
    </div>)
}




export default Order