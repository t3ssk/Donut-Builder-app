import React from 'react'
import {DonutIngredients} from '../../Donut/DonutIngredients/DonutIngredients'
import {CancelButton} from '../../UI/Buttons/CancelButton'
import {SubmitButton} from '../../UI/Buttons/SubmitButton'
import {Button} from  '../../UI/Buttons/CancelButton'
import styles from './CheckoutSummary.module.css'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const CheckoutSummary = (props) => {
    
    return(
        <div className={styles.CheckoutSummary}>
            <h1>Skvělá volba, určitě si pochutnáte!</h1>
            <div className={styles.Donut}>
                <DonutIngredients icing={props.icing} topping={props.topping} napln={props.napln}/>
            </div>
            <CancelButton onClick={props.checkoutCancel}>Zrušit objednávku</CancelButton>{!props.token ? <Link to='/auth'><Button>Přihlásit se</Button> </Link>: null }{props.token ? <SubmitButton onClick={props.checkoutContinue}/>: <p className="Error Err"> K dokončení objednávky se musíš přihlásit. Pak se vrať sem, tvůj donut tě tu počká.</p>} 
        </div>
    )

}

const mapStateToProps = (state) => {
    return {token: state.auth.idToken}
}

export default connect(mapStateToProps)(CheckoutSummary)