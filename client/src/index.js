import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from "state";
//Provide store to react via provider
import { Provider } from 'react-redux';

/*
A store is an immutable object tree in Redux. 
A store is a state container which holds the application's state.
Redux can have only a single store in your application. 
Whenever a store is created in Redux, you need to specify the reducer. 
*/
const store = configureStore({
  reducer: {
    global: globalReducer
  },
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
