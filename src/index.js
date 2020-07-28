import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/toDo.css'

import App from './components/App'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.querySelector('#root'))