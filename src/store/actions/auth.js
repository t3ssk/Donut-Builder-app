import axios from 'axios'
import apiKey from './apikey'
export const authStart = () => {
    return {type: 'AUTH/START'}
}

export const authSuccess = (authData) => {
    return {type: 'AUTH/SUCCESS', authData: authData}
}

export const authFail = (error) => {
    return {type: 'AUTH/FAIL', error: error}
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
            .then((response) => {console.log(response); dispatch(authSuccess(response.data))})
            .catch((error)=> {console.log(error); dispatch(authFail(error))})
    }
}

