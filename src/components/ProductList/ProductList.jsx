import React from 'react';
import { Product } from '../Product/Product';

export const ProductList = ({ products }) => (
  <ul className="ui list">
    {products.map(product => (
      <li key={product.id}>
        <Product product={product} />
      </li>
    ))}
  </ul>
);