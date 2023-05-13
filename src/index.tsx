import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './components';

import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
