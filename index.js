import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import { pokemonAPI } from './src/rtk';
import pokemonReducer, { reducerPokemon } from './src/store';
import createSagaMiddleware from 'redux-saga';
import myReducer from './src/store';
import mySaga from './src/sagas';
import rootReducer from './src/store';
const sagaMiddleware = createSagaMiddleware();
// const store = createStore(myReducer, applyMiddleware(sagaMiddleware));

const Store = configureStore({
  // reducer:{myReducer},
    reducer: rootReducer,
    // middleware:(getDefaultMiddleware) => [sagaMiddleware]
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonAPI.middleware).concat(sagaMiddleware),
})
sagaMiddleware.run(mySaga);

const ReduxApp = () => (
  <Provider store={Store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);

export default ReduxApp;
