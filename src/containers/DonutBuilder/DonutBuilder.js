import React from 'react';
import {DonutIngredients} from '../../components/Donut/DonutIngredients/DonutIngredients';
import {DonutControls} from '../../components/Donut/DonutControls/DonutControls';
import classes from './DonutBuilder.module.css';
import {Modal} from '../../components/UI/Modal/Modal'

export default class DonutBuilder extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }
    state = {
        total: 0,
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
        let tots = this.state.total
        const otherTypes = Object.keys(this.state[type])
        const stateCopy = {...this.state}
        otherTypes.forEach(typ=>{ 
            stateCopy[type][typ].bought = false
        })
        stateCopy[type][value].bought = true
       tots = stateCopy.total += stateCopy[type][value].price
        this.setState({...stateCopy,total: tots})
    }

    handleRemove(){
        let oldIcing = this.state.icing
        let oldTopping = this.state.topping
        let oldNapln = this.state.napln
        console.log(oldIcing)
        Object.keys(oldIcing).forEach(item=>oldIcing[item].bought=false)
        Object.keys(oldTopping).forEach(item=>oldTopping[item].bought=false)
        Object.keys(oldNapln).forEach(item=>oldNapln[item].bought=false)

  
        this.setState({icing: oldIcing, topping: oldTopping, napln: oldNapln, total: 0})

    }

    render(){
        let poleva = Object.keys(this.state.icing).find(key=>{return this.state.icing[key].bought===true})
        let nahoru = Object.keys(this.state.topping).find(key=>{return this.state.topping[key].bought===true})
        let plnka = Object.keys(this.state.napln).find(key=>{return this.state.napln[key].bought===true})
        let sum =this.state.total
        

        return(
            <React.Fragment>
                <Modal></Modal>
              <DonutIngredients icing={poleva} topping={nahoru} napln={plnka}/>
              {sum === 0 ? "" : <div className={classes.price}>Zaplatíš {this.state.total} korun</div>}
             <DonutControls icing={this.state.icing} topping={this.state.topping} napln={this.state.napln} handleChange={this.handleChange} handleReset={this.handleRemove} />
            </React.Fragment>
        )
    }
}