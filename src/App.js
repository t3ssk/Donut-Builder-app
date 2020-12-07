import React from 'react'
import Layout from './components/Layout/Layout'
import DonutBuilder from './containers/DonutBuilder/DonutBuilder'
import {Router} from 'react-router-dom'
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom'
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout'
import * as actions from './store/actions/auth'
import {connect} from 'react-redux'
class App extends React.Component {
  componentDidMount(){
    this.props.fetchUser()
  }
  render(){
  return (
    <BrowserRouter>
    <Layout>
    
      <Switch>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/orders' component={Orders}/>
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
export default connect(null, mapDispatchToProps)(App);
