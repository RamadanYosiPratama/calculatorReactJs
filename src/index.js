import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import App from './component/App';
import rootReducer from './reducers/index';


const store = createStore(rootReducer)

render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
    )
