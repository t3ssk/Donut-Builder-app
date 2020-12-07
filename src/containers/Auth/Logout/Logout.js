import React, {Component} from 'react'
import {connect} from 'react-redux'
import {history} from 'react-router-dom'
import * as actions from '../../../store/actions/auth'


class Logout extends Component {
    constructor(props){
        super(props)
        this.props.logOut()
        this.props.history.push('/')
    }
    render(){
        return(
            <p>Nashle příště!</p>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        token: state.auth.idToken
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: ()=>{dispatch(actions.logOut())}
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Logout)