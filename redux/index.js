import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxLogger from './logger';

import rootReducer from './reducers';

const middleware = [];

if (process.env.NODE_ENV === 'development') {
    middleware.push(reduxLogger);
}

const store = createStore(rootReducer, compose(
  applyMiddleware(...middleware),
));

const ReduxProvider = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
);

export default ReduxProvider;
