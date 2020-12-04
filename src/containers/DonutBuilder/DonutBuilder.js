import React from 'react';
import {DonutIngredients} from '../../components/Donut/DonutIngredients/DonutIngredients';
import {DonutControls} from '../../components/Donut/DonutControls/DonutControls';
import classes from './DonutBuilder.module.css';
import Objednavka from '../../components/Donut/Objednavka/Objednavka'
import withErroHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../axios-orders'
import {Route} from 'react-router-dom'
import Checkout from '../Checkout/Checkout'
import {connect} from 'react-redux'
import * as appActions from '../../store/actions/index'

class DonutBuilder extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleBuy = this.handleBuy.bind(this)
        this.handleHide = this.handleHide.bind(this)
        this.handlePurchase = this.handlePurchase.bind(this)
    }
    state = {
        total: 0,
        finalOrder: {icing: {cena: 0}, topping:{cena: 0}, napln: {cena: 0}},
        prevClicked: "",
        prevPrice: 0,
        koupit: false,
        modal: false,
        loading: false,
        icing: {
            pink: {
                id: 1,  
                bought: false,
                price: 14
            },
            šmoula: {
                id: 2,
                bought: false,
                price: 15
            },
            čokoláda: {
                id: 3,
                bought: false,
                price: 14
            },
            karamel: {
                id: 4,
                bought: false,
                price: 16
            }
        },
        topping: {
            sprinkles: {
                id:5,
                bought: false,
                price: 10
            }, 
            oreo: {
                id:6,
                bought: false,
                price: 17
            },
            čokoláda: {
                id:7,
                bought: false,
                price: 12
            },
            maliny: {
                id:8,
                bought: false,
                price: 13
            }
        },
        napln: {
            marmeláda: {
                id:9,
                bought: false,
                price: 7
            },
            karamel: {
                id:10,
                bought: false,
                price: 10
            },
            čokoláda: {
                id:11,
                bought: false,
                price: 11
            },
            krém: {
                id:12,
                bought: false,
                price: 12
            }
        }
        
    }

    handleChange(e) {

        const type = e.target.name
        const value = e.target.value
        const otherTypes = Object.keys(this.state[type])
        const stateCopy = {...this.state}
        otherTypes.forEach(typ=>{ 
            stateCopy[type][typ].bought = false
        })
        stateCopy[type][value].bought = true
       
      
        stateCopy.finalOrder[type] = {typ: value, cena: stateCopy[type][value].price}
         stateCopy.total += stateCopy[type][value].price
        
         stateCopy.total =  stateCopy.finalOrder.icing.cena + stateCopy.finalOrder.topping.cena + stateCopy.finalOrder.napln.cena
        this.setState({...stateCopy})
    }

    handleRemove(){
        let oldIcing = this.state.icing
        let oldTopping = this.state.topping
        let oldNapln = this.state.napln
        Object.keys(oldIcing).forEach(item=>oldIcing[item].bought=false)
        Object.keys(oldTopping).forEach(item=>oldTopping[item].bought=false)
        Object.keys(oldNapln).forEach(item=>oldNapln[item].bought=false)

  
        this.setState({icing: oldIcing, topping: oldTopping, napln: oldNapln, total: 0, finalOrder: {icing: {cena: 0}, topping:{cena: 0}, napln: {cena: 0}}})

    }

    handleBuy(){
        this.setState({koupit: true, modal:true})
    }
    handleHide(){
        this.setState({koupit: false, modal:false})
    } 
    
   
    handlePurchase(){
        this.setState({loading: true})
        
        /* let icing = null
        if(this.props.finalOrder.icing.typ){
            icing = this.props.finalOrder.icing.typ
        }
        let topping = null
        if(this.props.finalOrder.topping.typ){
            topping = this.props.finalOrder.topping.typ
        }
        let napln = null
        if(this.props.finalOrder.topping.typ){
             napln = this.props.finalOrder.napln.typ
        }
        const total = this.props.total */
        this.props.history.push(`/checkout`)
       /* const data = {order: this.state.finalOrder,
                     price: this.state.total,
                        customer: {
                            name: 'Tereza Konečná', 
                            address: {
                                street: 'U vysočanského pivovaru 709',
                                zip: '19000',
                                country: 'Czech Rep'
                            },
                            email: 'te.konecna@email.com'
                        },
                     deliveryMethod: 'fastest'}
        axios.post('/orders.json', data).then(response=>{this.setState({loading: false, koupit: false, modal: false})}).catch((error)=>{this.setState({loading: false,  koupit: false,  modal: false})})
 */    }
    render(){
        let poleva = Object.keys(this.state.icing).find(key=>{return this.state.icing[key].bought===true})
        let nahoru = Object.keys(this.state.topping).find(key=>{return this.state.topping[key].bought===true})
        let plnka = Object.keys(this.state.napln).find(key=>{return this.state.napln[key].bought===true})
        let sum = this.state.total
        

        return(
            <React.Fragment>

               <Objednavka showModal = {this.state.modal} hideModal={this.handleHide} handleBuy={this.handlePurchase} isLoading={this.state.loading} />
              <DonutIngredients icing={poleva} topping={nahoru} napln={plnka}/>
              {sum === 0 || this.state.koupit === true ? "" : <div className={classes.price}>Zaplatíš {this.state.total} korun</div>}
             <DonutControls icing={this.state.icing} topping={this.state.topping} napln={this.state.napln} handleChange={this.handleChange} handleReset={this.handleRemove} koupit={()=>{this.handleBuy(); this.props.onGetOrder(this.state.finalOrder); this.props.getTotal(this.state.total)}}/>

             <Route path='/checkout' component={Checkout}/>
             </React.Fragment>
        )
    }
}


//this.props.getTotal(this.state.total)
const mapStateToProps = (state) => {
    return {finalOrder : state.donut.finalOrder,
            total: state.donut.total}

}

const mapDispatchToProps = (dispatch) => {
    return{
        onGetOrder: (order) => dispatch(appActions.getOrder(order)),
        getTotal: (total)=>dispatch(appActions.getTotal(total))
    }
} 


export default connect(mapStateToProps, mapDispatchToProps)(withErroHandler(DonutBuilder, axios))