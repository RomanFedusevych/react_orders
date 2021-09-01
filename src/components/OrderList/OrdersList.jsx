import React from 'react';
import { Order } from '../Order/Order';

export const OrdersList = ({ orders }) => (
  <div className="container">
    {orders.map((order) => (
      <Order key={order.id} order={order} />
    ))}
  </div>
);