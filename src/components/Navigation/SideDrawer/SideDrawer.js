import React from 'react'
import styles from './SideDrawer.module.css'    
import {Logo} from '../Logo/Logo'
import {NavigationItems} from '../Navigation-items/NavgationItems'
import {Backdrop} from '../../UI/Backdrop/Backdrop'
import ClearIcon from '@material-ui/icons/Clear';
import PropTypes from 'prop-types'


export const SideDrawer = (props) => {
    const shown = props.shown

    return (
     <React.Fragment>
     <Backdrop show={shown ? true : false} handleHide={props.handleHide}/>
        <div className={shown ? `${styles.SideDrawer} ${styles.Open}` : `${styles.SideDrawer} ${styles.Closed}`}>
                <div className={styles.closer} onClick={props.handleHide}>
                    <ClearIcon/>
                </div>
                <Logo/>
                <nav>
                    <NavigationItems token={props.token} action={props.action} order={props.order}/>
                </nav>
        </div>
    </React.Fragment>)
}

SideDrawer.propTypes = {
    shown: PropTypes.bool,
    handleHide: PropTypes.func
}