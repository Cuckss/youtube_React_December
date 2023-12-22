import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import "./_base.scss"
import { BrowserRouter } from 'react-router-dom';
import store from './redux-toolkit';
import { Provider } from 'react-redux';
import YoutubeApiKeyContextProvider from './YoutubeApiKeyContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <YoutubeApiKeyContextProvider >
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>

    </YoutubeApiKeyContextProvider>
    
  
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

