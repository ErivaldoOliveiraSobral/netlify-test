import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { store } from '../src/app/store';
import reportWebVitals from './app/reportWebVitals';

import App from './pages';
// import Counter from './pages/Counter'
import Links from './pages/Links';
import BlackOpsTerminus from './pages/BlackOpsTerminus';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/counter",
  //   element: <Counter />
  // },
  {
    path: "/4dev",
    element: <Links />,
  },
  {
    path: "/blackops-terminus",
    element: <BlackOpsTerminus />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
