import React from 'react';
import styles from './NavgationItems.module.css';
import {NavigationItem} from  './NavigationItem/NavigationItem'

export const NavigationItems = (props) => {
    return(
        <ul className={styles.NavigationItems}>
            <NavigationItem link='/' active>Link</NavigationItem>
            <NavigationItem link='/'>Link</NavigationItem>
            <NavigationItem link='/'>Link</NavigationItem>
        </ul>
    )
}



