import React from 'react'
import styles from './NavigationItem.module.css'
import {NavLink} from 'react-router-dom'

export const NavigationItem = (props) => {
    return <li className={styles.NavigationItem}><NavLink to={props.link} activeClassName={styles.active} exact>{props.children}</NavLink></li>
}
