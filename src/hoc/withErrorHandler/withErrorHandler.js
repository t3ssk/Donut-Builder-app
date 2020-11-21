import React from 'react'
import {Modal} from '../../components/UI/Modal/Modal'
const withErrorHandler = (WrappeddComponent, axios) => {
    return class extends React.Component{
        constructor(props){
            super(props)
            this.errorConfirmedHandler = this.errorConfirmedHandler.bind(this)
        }
        state = {
            error: null
        }
        componentDidMount(){
           let myInterceptorReq = axios.interceptors.request.use((req)=>{
                this.setState({error: null})
                return req
            })
            let myInterceptorRes = axios.interceptors.response.use(res=> res, (error)=>{
                this.setState({error: error})
            })
        }
        errorConfirmedHandler(){
            this.setState({error: null})
        }
     render() {  
    
        return(<React.Fragment>
                  {this.state.error && <Modal show={this.state.error} handleHide={this.errorConfirmedHandler}  header='O-ou!'>
                        <p>Něco se pokazilo</p>
                       <p>{this.state.error.message}</p>
                    </Modal>}
                    <WrappeddComponent {...this.props} />
                </React.Fragment>)
        }
    componentWillUnmount(){
        axios.interceptors.request.eject(this.myInterceptorReq)
        axios.interceptors.response.eject(this.myInterceptorRes)
    }
    }
}

export default withErrorHandler;