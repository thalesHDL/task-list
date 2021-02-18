import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';

import store from './store';
import Panel from './components/Panel';


const rootComponent = <Provider store={store}><Panel /></Provider>;
const rootNode = document.getElementById('root');
ReactDOM.render(
    rootComponent, 
    rootNode
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
