import React from 'react';
import styles from './Toolbar.module.css'
import {Logo} from '../Logo/Logo'
import {Toggler} from '../Toggler/Toggler'
import {NavigationItems} from '../Navigation-items/NavgationItems'

export const Toolbar = (props) => {
    return(
    <React.Fragment>
        <div onClick={props.onClick} className={styles.Toggler}>
          <Toggler/>
        </div>
    <header className={styles.Toolbar}>

        <Logo/>
        <nav>
          <NavigationItems token={props.token} action={props.action} order={props.order}/>
        </nav>
    </header>
    </React.Fragment>)
}