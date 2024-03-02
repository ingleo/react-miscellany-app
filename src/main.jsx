import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

/* import { App } from './App.jsx';
import { TodoApp } from './components/reducer/TodoApp.jsx';
import { MainApp } from './components/context/MainApp.jsx'; */
import { HooksApp } from './HooksApp.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/hookapp">
      {/* <App />
      <TodoApp /> */}
      {/* <MainApp /> */}
      <HooksApp />
    </BrowserRouter>
  </React.StrictMode>
);
