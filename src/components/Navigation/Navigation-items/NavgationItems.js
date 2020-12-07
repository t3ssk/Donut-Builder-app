import React from 'react';
import styles from './NavgationItems.module.css';
import {NavigationItem} from  './NavigationItem/NavigationItem'


export const NavigationItems = (props) => {
    return(
        <ul className={styles.NavigationItems}>
            <NavigationItem link='/'> 🍩 Donut Builder</NavigationItem>
            {props.order > 0 && <NavigationItem link='/checkout'>💰 Checkout</NavigationItem>}
            {!props.token ? <NavigationItem link='/auth'>🌕 Přihlásit</NavigationItem> :<NavigationItem link='/logout'>🌑 Odhlásit</NavigationItem> }
            
            {props.token !== null && <NavigationItem link='/orders'>🧺 Objednávky</NavigationItem>}
        </ul>
    )
}



