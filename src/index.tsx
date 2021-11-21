import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createServer, Model } from 'miragejs';
import response from './assets/server.json';

createServer({
  models: {
    product: Model,
    stock: Model,
  },

  seeds(server) {
    server.db.loadData({
      stock: response.stock,
      products: response.products,
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/stock', () => {
      return this.db.stock;
    });

    this.get('/stock/:id', (_, request) => {
      const { id } = request.params;
      return this.db.stock.findBy({ id: id });
    });

    this.get('/products', () => {
      return this.db.products;
    });

    this.get('/products/:id', (_, request) => {
      const { id } = request.params;
      return this.db.products.findBy({ id: id });
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
