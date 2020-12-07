import axios from 'axios'
import apiKey from './apikey'
export const authStart = () => {
    return {type: 'AUTH/START'}
}

export const authSuccess = (email, localId, idToken) => {
    return {type: 'AUTH/SUCCESS', email: email, localId: localId, idToken: idToken}
}

export const authFail = (error) => {
    return {type: 'AUTH/FAIL', error: error}
}

export const logOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationTime')
    localStorage.removeItem('email')
    localStorage.removeItem('localId')
    return {type: 'LOG_OUT'}
}

export const checkAuthTimeout = (expirationTime) => {
   return dispatch => {setTimeout(()=>{dispatch(logOut())}, (expirationTime*1000))}
}

export const authenticate = (email,password, isSignUp) => {
    let endpoint 
    isSignUp ? endpoint = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+apiKey : endpoint = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+apiKey

    return dispatch => {
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post(endpoint, authData)
            .then((response) => {
                const expiration = new Date(new Date().getTime() + response.data.expiresIn * 1000)
                //vytvoří expiration time. new Date bez args získá současný čas, s argumenty nastaví čas na to, co chceme
                localStorage.setItem('token', response.data.idToken)
                localStorage.setItem('expirationTime', expiration)
                localStorage.setItem('email', response.data.email)
                localStorage.setItem('localId', response.data.localId)
                dispatch(authSuccess(response.data.email, response.data.localId, response.data.idToken))
                dispatch(checkAuthTimeout(response.data.expiresIn))})
            .catch((error)=> {
                let message
                switch(error.response.data.error.message){
                    case 'EMAIL_EXISTS':
                        message = "S tímhle mailem už je u nás někdo zaregistrovaný. Nejsi to ty?"
                        break;
                    case 'EMAIL_NOT_FOUND': 
                        message = 'Nikdo takový u nás není. Nechceš se zaregistrovat?'
                        break;
                    case 'INVALID_PASSWORD': 
                        message = 'Zadané heslo nesouhlasí s tím, co jsi zadal při registraci.'
                        break;
                    default: 
                        message = 'Nevíme, co je přesně špatně, ale zkontroluj si údaje a přihlaš se znovu.'
                        break;
                }
                
                dispatch(authFail(message))})
    }
}

export const authCheckState = () => {
    const expiration = new Date(localStorage.getItem('expirationTime'))
    const email = localStorage.getItem('email')
    const localId =  localStorage.getItem('localId')
    return (dispatch) => {
        const token = localStorage.getItem('token')
        console.log(token)
        if(!token){
            dispatch(logOut())
        } else if (expiration >= new Date()) {
            dispatch(authSuccess(email, localId, token))
            dispatch(checkAuthTimeout((expiration.getTime() - new Date().getTime())/1000))
        } else {
            console.log('logging out')
            dispatch(logOut())
        }
    }
}