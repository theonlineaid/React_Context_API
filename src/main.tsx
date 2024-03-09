import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CounterProvider } from './context/counterV2.tsx'

import {CartProvider} from './context/Cart.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CounterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CounterProvider>
  </React.StrictMode>,
)
