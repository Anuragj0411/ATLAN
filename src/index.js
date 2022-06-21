import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
console.log(loadTime);
