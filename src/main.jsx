import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Component/Header'
import Product from './Component/Product'
import ProductList from './Component/ProductList'
import Foter from './Component/Foter'
import { Provider } from 'react-redux'
import store from './reduc/store/Store'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <BrowserRouter>
   <App />
   </BrowserRouter>
    <Foter />
  </Provider>
  
)
