import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
//importing this api from app.ts file (defined here)
import { getImages } from './redux/app.ts';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document?.getElementById('root'));
root.render(
    <ApiProvider api={getImages}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ApiProvider>
);
reportWebVitals();
