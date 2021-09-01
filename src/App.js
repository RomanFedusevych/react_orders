import React from 'react';

import './App.scss';
import { OrdersList } from './components/OrderList/OrdersList';

import usersFormServer from './api/users.json';
import productsFromServer from './api/products.json';
import ordersFromServer from './api/orders.json';

const preparedOrders = ordersFromServer.map(order => ({
  ...order,
  user: usersFormServer.find(user => user.id === order.userId),
  products: productsFromServer.filter(product => product.orderId === order.id),
}));

function App() {
  return (
    <>
      <OrdersList orders={preparedOrders} />
    </>
  );
}

export default App;
