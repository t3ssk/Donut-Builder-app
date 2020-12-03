import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose, combineReducers } from 'redux'
import donutReducer from './store/reducers/donutReducer'
import customerReducer from './store/reducers/customerReducer'
import {orderReducer} from './store/reducers/orderReducer'
import {fetchReducer} from './store/reducers/fetchReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  donut: donutReducer,
  customer: customerReducer,
  order: orderReducer,
  fetched: fetchReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)
))


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
