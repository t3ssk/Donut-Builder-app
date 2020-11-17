import React, {useState} from 'react';
import styles from './DonutControls.module.css'


export const DonutControls = (props) => {
    const [polevaCheck, setPolevaCheck] = useState(false)
    const [toppingCheck, setToppingCheck] = useState(false)
    const [naplnCheck, setNaplnCheck] = useState(false)


    const polevy = Object.keys(props.icing)
    const icingOpts = polevy.map(item=> {
        const checked=props.icing[item].bought
        return (
            <React.Fragment key={props.icing[item].id}>
                <label htmlFor={item + props.icing[item].id}>
                <input type="radio" id={item + props.icing[item].id} name="icing" checked={checked} value={item} onChange={(e)=> {setPolevaCheck(true); props.handleChange(e)}}></input>
                <span>{item}</span></label>
            </React.Fragment>
        )
    })
    const toppingOpts = Object.keys(props.topping).map(
        item=> {
            const checked=props.topping[item].bought
            return (
                <React.Fragment  key={props.topping[item].id}>
                    <label htmlFor={item + props.topping[item].id}> 
                    <input type="radio" id={item + props.topping[item].id} name="topping" value={item} checked={checked} onChange={(e)=>{setToppingCheck(true); props.handleChange(e)}}></input>
                    <span>{item}</span></label>
                </React.Fragment>
            )
        }
    )
    const naplnOpts = Object.keys(props.napln).map(
        item=> {
            const checked=props.napln[item].bought
            return (
                <React.Fragment key={props.napln[item].id}>
                    <label htmlFor={item + props.napln[item].id} >
                    <input type="radio" id={item + props.napln[item].id} name="napln" value={item} checked={checked} onChange={(e)=>{setNaplnCheck(true); props.handleChange(e)}}></input>
                    <span>{item}</span></label>
                </React.Fragment>
            )
        }
    )

    return(
        <div className={styles.vyber}>
            <div>
                <h3>Zvol si polevu:</h3>
                    {icingOpts}
            </div>
             {polevaCheck&& <div> <h3>Zvol si topping:</h3>{toppingOpts}</div>}   
            
            {toppingCheck && <div><h3>Zvol si náplň:</h3>{naplnOpts}</div>}
            
            <br></br>
            {polevaCheck && <React.Fragment><button type="button" onClick={()=>{setNaplnCheck(false); setToppingCheck(false); setPolevaCheck(false); props.handleReset()}}>začni znovu</button> 
                <button type="button" className={styles.order}>OBJEDNAT</button>
            </React.Fragment>
            
            }

        </div>
    )
}