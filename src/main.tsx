import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import './reset.css';
import { Provider } from 'react-redux';
import store from './app/store-provider/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
