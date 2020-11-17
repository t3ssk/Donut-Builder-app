import React from 'react'
import {Layout} from './components/Layout/Layout'
import DonutBuilder from './containers/DonutBuilder/DonutBuilder'



class App extends React.Component {
  render(){
  return (
    <Layout>
      <DonutBuilder/>
    </Layout>
  );}
}

export default App;
