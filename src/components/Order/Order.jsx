import React from 'react';
import { ProductList } from '../ProductList/ProductList';
import { User } from '../User/User';

export const Order = ({ order }) => {
  const { title, user } = order;

  return (
    <div className="ui card">
      <div className="ui content">
        <div className="ui description">
          <p>
            {`${title} - `}
            <User user={user} />
          </p>
          {order.products.length
            ? (<ProductList products={order.products} />)
            : (<p>No products found</p>)}
        </div>
      </div>
    </div>
  );
};