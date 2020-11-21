import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://donut-builder.firebaseio.com/' 
})


export default instance;