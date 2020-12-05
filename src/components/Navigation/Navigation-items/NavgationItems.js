import React from 'react';
import styles from './NavgationItems.module.css';
import {NavigationItem} from  './NavigationItem/NavigationItem'


export const NavigationItems = (props) => {
    return(
        <ul className={styles.NavigationItems}>
            <NavigationItem link='/'>Donut Builder</NavigationItem>
            <NavigationItem link='/checkout'>Checkout</NavigationItem>
            <NavigationItem link='/auth'>Přihlásit</NavigationItem>
            <NavigationItem link='/orders'>Objednávky</NavigationItem>
        </ul>
    )
}



