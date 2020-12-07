import React from 'react';
import { Toolbar } from '../Navigation/Toolbar/Toolbar'
import { SideDrawer } from '../Navigation/SideDrawer/SideDrawer'
import classes from './Layout.module.css'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/auth' 

class Layout extends React.Component {
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
    <Toolbar onClick={this.sideDrawerOpenHandler} token={this.props.token} action={this.props.logOut} order={this.props.order}/>
    <SideDrawer handleHide={this.sideDrawerClosedHandler} shown={this.state.showSideDrawer}/>
    <main>
        {this.props.children}
    </main>
    </React.Fragment>)}
}
const mapStateToProps = (state) => {
    return {
        order: state.donut.total,
        token: state.auth.idToken
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: ()=>{dispatch(actions.logOut())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)