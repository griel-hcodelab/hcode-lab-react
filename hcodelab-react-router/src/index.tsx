import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Models from './routes/models';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Discover } from './routes/discover';
import { Model } from './routes/model';

const container = document.querySelector("div#root") as HTMLElement;

const root = createRoot(container);

root.render(
  <>

  <BrowserRouter>
  <Header />
    <Routes>
    
      
      <Route path="/" element={<App />} />
      
      <Route path="/models" element={<Models />} />

      <Route path="/models/:id" element={<Model  />} />
      
      <Route path="/discover" element={<Discover />} />

    </Routes>

  <Footer />

  </BrowserRouter>
  </>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
