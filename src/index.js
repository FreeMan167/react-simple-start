import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { App } from './containers/App';
import reducers from './reducers';
require('../assets/sass/style.scss'); //load style with scss

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.getElementById('app')
);
