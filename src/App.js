import React, {Suspense} from 'react'
import Layout from './components/Layout/Layout'
import DonutBuilder from './containers/DonutBuilder/DonutBuilder'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Checkout from './containers/Checkout/Checkout'
//import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout'
import * as actions from './store/actions/auth'
import {connect} from 'react-redux'
import {Spinner} from './components/UI/Spinner/Spinner'

const Orders = React.lazy(()=>import('./containers/Orders/Orders'))

class App extends React.Component {
  constructor(props){
    super(props)
    this.props.fetchUser()
  }
  render(){
 return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route path='/checkout' component={Checkout}/>
        {this.props.auth && <Route path='/orders' render={()=>(<Suspense fallback={<div><Spinner/></div>}>
          <Orders/>
        </Suspense>)}/>}
        <Route path='/auth' component={Auth}/>
         <Route path='/logout' component={Logout}/> 
        <Route path='/' component={DonutBuilder}/>
      </Switch>
    </Layout>
    </BrowserRouter>
  );}
}
const mapDispatchToProps = (dispatch) => {
  return({
    fetchUser: ()=>{dispatch(actions.authCheckState())}
  })
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.authenticated
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
