import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store';
import createSagaMiddleware from 'redux-saga';
import getCustomer from './sagas/customersaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(getCustomer);
const app = (<Provider store={store}>  <App /> </Provider>);
ReactDOM.render(app, document.getElementById('root'));


serviceWorker.unregister();
