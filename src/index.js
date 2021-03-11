import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import App from './App';
import { data } from './utils/data';

const Index = () => (
  <HelmetProvider>
    <Helmet>
      <title>{data.websiteTitle}</title>
    </Helmet>
    <App />
  </HelmetProvider>
)

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

