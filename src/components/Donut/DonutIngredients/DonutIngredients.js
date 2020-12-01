import React from 'react';
import classes from './DonutIngredients.module.css';
import plain from './Pngs/nakedDonut.png';
import pinkIcing from './Pngs/IcingPink.png';
import pinkIcingSpr from './Pngs/IcingPinkSpr.png';
import pinkIcingOr from './Pngs/IcingPinkOr.png';
import pinkIcingChoc from './Pngs/IcingPinkChoc.png';
import pinkIcingRasp from './Pngs/IcingPinkRasp.png';
import blueIcing from './Pngs/IcingBlue.png';
import blueIcingSpr from './Pngs/IcingBlueSpr.png';
import blueIcingOr from './Pngs/IcingBlueOr.png';
import blueIcingChoc from './Pngs/IcingBlueChoc.png';
import blueIcingRasp from './Pngs/IcingBlueRasp.png';
import chocIcing from './Pngs/IcingChoc.png';
import chocIcingSpr from './Pngs/IcingChocSpr.png';
import chocIcingOr from './Pngs/IcingChocOr.png';
import chocIcingChoc from './Pngs/IcingChocChoc.png';
import chocIcingRasp from './Pngs/IcingChocRasp.png';
import caramIcing from './Pngs/IcingCaram.png';
import caramIcingSpr from './Pngs/IcingCaramSpr.png';
import caramIcingOr from './Pngs/IcingCaramOr.png';
import caramIcingChoc from './Pngs/IcingCaramChoc.png';
import caramIcingRasp from './Pngs/IcingCaramRasp.png';



export class DonutIngredients extends React.Component{
    render(){
    let donut = null
    switch(this.props.icing){
        case('pink'):
            switch(this.props.topping){
                case('sprinkles'):
                    donut =  <img src={pinkIcingSpr} alt='Donut s růžovou polevou se sprinkles'/>
                    break;
                case('oreo'):
                    donut =  <img src={pinkIcingOr} alt='Donut s růžovou polevou s oreo'/>
                    break;
                case('čokoláda'):
                    donut =  <img src={pinkIcingChoc} alt='Donut s růžovou polevou s kousky čokolády'/>
                    break;
                case('maliny'):
                    donut =  <img src={pinkIcingRasp} alt='Donut s růžovou polevou s kousky lyofilizovaných malin'/>
                    break;
                default:
                    donut=  <img src={pinkIcing} alt='Donut s růžovou polevou'/>
                    break;
                }
         break;
         case ('šmoula'):
             switch(this.props.topping){
                 case('sprinkles'):
                    donut =  <img src={blueIcingSpr} alt='Donut s modrou polevou se sprinkles'/>
                    break;
                case('oreo'):
                    donut =  <img src={blueIcingOr} alt='Donut s modrou polevou s oreo'/>
                    break;
                case('čokoláda'):
                    donut =  <img src={blueIcingChoc} alt='Donut s modrou polevou s kousky čokolády'/>
                    break;
                case('maliny'):
                    donut =  <img src={blueIcingRasp} alt='Donut s modrou polevou s kousky lyofilizovaných malin'/>
                    break;
                default:
                    donut=  <img src={blueIcing} alt='Donut s modrou polevou'/>
                    break;
             }
        break;
        case ('čokoláda'):
             switch(this.props.topping){
                 case('sprinkles'):
                    donut =  <img src={chocIcingSpr} alt='Donut s čokoládovou polevou se sprinkles'/>
                    break;
                case('oreo'):
                    donut =  <img src={chocIcingOr} alt='Donut s čokoládovou polevou s oreo'/>
                    break;
                case('čokoláda'):
                    donut =  <img src={chocIcingChoc} alt='Donut s čokoládovou polevou s kousky čokolády'/>
                    break;
                case('maliny'):
                    donut =  <img src={chocIcingRasp} alt='Donut s čokoládovou polevou s kousky lyofilizovaných malin'/>
                    break;
                default:
                    donut=  <img src={chocIcing} alt='Donut s čokoládovou polevou'/>
                    break;
             }
        break;
        case ('karamel'):
             switch(this.props.topping){
                 case('sprinkles'):
                    donut =  <img src={caramIcingSpr} alt='Donut s karamelovou polevou se sprinkles'/>
                    break;
                case('oreo'):
                    donut =  <img src={caramIcingOr} alt='Donut s karamelovou polevou s oreo'/>
                    break;
                case('čokoláda'):
                    donut =  <img src={caramIcingChoc} alt='Donut s karamelovou polevou s kousky čokolády'/>
                    break;
                case('maliny'):
                    donut =  <img src={caramIcingRasp} alt='Donut s karamelovou polevou s kousky lyofilizovaných malin'/>
                    break;
                default:
                    donut=  <img src={caramIcing} alt='Donut s karamelovou polevou'/>
                    break;
             }
        break;
        default:
            donut=   <img src={plain} alt='Donut bez přísad'/>          
            break;
        }
        let napln = null
        switch(this.props.napln){
            case('marmeláda'):
            napln =  <aside className={classes.marmelada}></aside>
            break;
            case('karamel'):
            napln =  <aside className={classes.karamel}></aside>
            break;
            case('čokoláda'):
            napln =  <aside className={classes.cokolada}></aside>
            break;
            case('krém'):
            napln =  <aside className={classes.krem}></aside>
            break;
            default:
            napln = ""
            break;
        }

        return (
        <section>
            <div className={classes.donut}>{donut}</div>
            {napln}
        </section>
        )}
    }


