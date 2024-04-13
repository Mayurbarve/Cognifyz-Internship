import React from 'react';
import ReactDOM from 'react-dom/client';

import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from './Cards/Cards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>
);  