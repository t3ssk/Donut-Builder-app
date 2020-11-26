import React from 'react'
import {DonutIngredients} from '../../Donut/DonutIngredients/DonutIngredients'
import {CancelButton} from '../../UI/Buttons/CancelButton'
import {SubmitButton} from '../../UI/Buttons/SubmitButton'
import styles from './CheckoutSummary.module.css'
const CheckoutSummary = (props) => {
    
    return(
        <div className={styles.CheckoutSummary}>
            <h1>Skvělá volba, určitě si pochutnáte!</h1>
            <div className={styles.Donut}>
                <DonutIngredients icing={props.icing} topping={props.topping} napln={props.napln}/>
            </div>
            <div>
                Objednávka
            </div>
            <CancelButton onClick={props.checkoutCancel}>Zrušit objednávku</CancelButton> <SubmitButton onClick={props.checkoutContinue}/>
        </div>
    )

}

export default CheckoutSummary