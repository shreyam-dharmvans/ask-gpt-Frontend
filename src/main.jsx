import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './store/store.js';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
//http://localhost:8080/api/v1
axios.defaults.baseURL = 'https://ask-gpt-backend.onrender.com/api/v1';
axios.defaults.withCredentials = true;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Toaster position='top-center'></Toaster>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
