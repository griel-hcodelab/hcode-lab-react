import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Models from './routes/models';

const container = document.querySelector("div#root") as HTMLElement;

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<App />} />
      
      <Route path="/models" element={<Models />} />

    </Routes>

  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();