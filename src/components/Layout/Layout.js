import React from 'react';
import { Toolbar } from '../Navigation/Toolbar/Toolbar'
import { SideDrawer } from '../Navigation/SideDrawer/SideDrawer'
import classes from './Layout.module.css'


export class Layout extends React.Component {
    constructor(props){
        super(props)
        this.sideDrawerClosedHandler = this.sideDrawerClosedHandler.bind(this) 
        this.sideDrawerOpenHandler = this.sideDrawerOpenHandler.bind(this) 
    }
    state={
        showSideDrawer: false,
    }
    sideDrawerClosedHandler(){
        this.setState({showSideDrawer: false})
    }
    sideDrawerOpenHandler(){
        this.setState({showSideDrawer: true})
    }
    render()
    {return(<React.Fragment>
    <Toolbar onClick={this.sideDrawerOpenHandler}/>
    <SideDrawer handleHide={this.sideDrawerClosedHandler} shown={this.state.showSideDrawer}/>
    <main>
        {this.props.children}
    </main>
    </React.Fragment>)}
}