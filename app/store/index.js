import {createStore,applyMiddleware,compose} from 'redux'
import {routerReducer} from 'react-router-redux'
import createLogger from "redux-logger"
import thunkMiddleware from "redux-thunk"

import rootReducer from '../reducers'

const loggerMiddleware = createLogger();


export default function configureStore(initialState) {
  const store = createStore(rootReducer,initialState,
  	compose(applyMiddleware(thunkMiddleware, loggerMiddleware),window.devToolsExtension ? window.devToolsExtension() : undefined)
  );

  return store;
}