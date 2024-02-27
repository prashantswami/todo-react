import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Main } from './pages/Main.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './lib/store/store.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main></Main>
    </Provider>
  </React.StrictMode>
);

