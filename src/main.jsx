import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./App.scss";
import { Provider } from 'react-redux';
import reduxStore from './store/redux/store.js';



ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={reduxStore}>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </Provider>
)
