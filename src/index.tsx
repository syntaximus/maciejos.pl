import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './components';
import './i18n/config';

import 'photoswipe/dist/photoswipe.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import './style-perspective.css';
import './variables.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
