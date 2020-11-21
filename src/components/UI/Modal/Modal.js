import React from 'react';
import styles from './Modal.module.css'
import {Backdrop} from '../Backdrop/Backdrop'


export class Modal extends React.Component {

     shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }  


   render(){return(
        <React.Fragment>
        <Backdrop show={this.props.show} handleHide={this.props.handleHide}/>
        <div className={styles.Modal}>
            <h2>{this.props.header}</h2>
            {this.props.children}
        </div>
        </React.Fragment>
    )}
}