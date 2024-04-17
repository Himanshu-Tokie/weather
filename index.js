import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import { name as appName } from './app.json';
import mySaga from './src/sagas';
import myReducer from './src/store';
import { thunk } from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();
// const store = createStore(myReducer, applyMiddleware(sagaMiddleware));

const Store = configureStore({
    reducer:myReducer,
    middleware:() => [sagaMiddleware,thunk]
})
sagaMiddleware.run(mySaga);

const ReduxApp = () => (
  <Provider store={Store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);

export default ReduxApp;
