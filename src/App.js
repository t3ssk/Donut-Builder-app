import React from 'react'
import {Layout} from './components/Layout/Layout'
import DonutBuilder from './containers/DonutBuilder/DonutBuilder'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth'

class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/orders' component={Orders}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/' component={DonutBuilder}/>
      </Switch>
    </Layout>
    </BrowserRouter>
  );}
}

export default App;
