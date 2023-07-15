import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Leva } from 'leva';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Leva collapsed />
    <App />
  </React.StrictMode>
);
