// ProductCatalog.jsx
import React, { useState } from 'react';
import ProductCatalogCard from '../../components/ProductCatalogCard'; 
import { useNavigate } from 'react-router-dom';

const ProductCatalog = () => {
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [productType, setProductType] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const navigate = useNavigate();
  
    const addProduct = () => {
      if (productName && productType && productQuantity) {
        setProducts([
          ...products,
          {
            id: Date.now(),
            name: productName,
            type: productType,
            quantity: parseInt(productQuantity, 10),
            image: 'https://scottishgrocer.co.uk/wp-content/uploads/2023/03/product-of-the-year.jpg', // Placeholder image
          },
        ]);
        setProductName('');
        setProductType('');
        setProductQuantity('');
      }
    };
  
    const updateProduct = (id, name, quantity) => {
      setProducts(
        products.map((product) =>
          product.id === id ? { ...product, name, quantity } : product
        )
      );
    };
  
    const deleteProduct = (id) => {
      setProducts(products.filter((product) => product.id !== id));
    };
  
    return (
      <div style={styles.page}>
        <h1 style={styles.title}>Product Catalog</h1>
  
        <div style={styles.formContainer}>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Product Name"
            style={styles.input}
          />
          <select
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            style={styles.input}
          >
            <option value="">Select Product Type</option>
            <option value="Tidbit">Tidbit</option>
            <option value="Stationary">Stationary</option>
          </select>
          <input
            type="number"
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
            placeholder="Initial Quantity"
            style={styles.input}
          />
          <button onClick={addProduct} style={styles.button}>Add Product</button>
        </div>
  
        <div style={styles.productList}>
          {products.map((product) => (
            <ProductCatalogCard
              key={product.id}
              product={product}
              onUpdate={updateProduct}
              onDelete={deleteProduct}
            />
          ))}
        </div>
  
        <button
          onClick={() => navigate('/product-request')}
          style={styles.linkButton}
        >
          Go to Product Request Page
        </button>
      </div>
    );
  };
  
  const styles = {
    page: {
      backgroundColor: '#ecf0f1',
      padding: '30px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: '20px',
    },
    formContainer: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '30px',
      width: '100%',
      maxWidth: '500px',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#27ae60',
      color: '#fff',
      fontSize: '18px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    linkButton: {
      padding: '12px 20px',
      backgroundColor: '#3498db',
      color: '#fff',
      fontSize: '18px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '20px',
      textDecoration: 'none',
    },
    productList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '30px',
      justifyContent: 'center',
    },
  };
  
  export default ProductCatalog;