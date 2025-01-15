import React from 'react';
import { Row, Col } from 'antd';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onAddToWishlist }) => {
  return (
    <Row gutter={[16, 16]}>
      {products.map((product) => (
        <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
          <ProductCard product={product} onAddToWishlist={onAddToWishlist} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductGrid;
