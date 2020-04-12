import React from "react";
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import rootReducer from "./redux/reducers";
import App from './App';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
