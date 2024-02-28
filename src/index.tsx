import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Main } from './pages/Main.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
// import { store } from './lib/store/store.ts';
import {storeKit} from './lib/store/storeKit.ts';
import {ThemeContext, ThemeContextProvider, useTheme} from './context/ThemeContextProvider.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <Provider store={storeKit}>
      <Main></Main>
    </Provider>
  </React.StrictMode>
);

