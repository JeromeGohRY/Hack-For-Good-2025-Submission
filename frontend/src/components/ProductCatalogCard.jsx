// ProductCatalogCard.jsx
import React, { useState } from 'react';

const ProductCatalogCard = ({ product, onUpdate, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(product.name);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleSave = () => {
    onUpdate(product.id, name, quantity);
    setEditing(false);
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <div style={styles.cardContent}>
        {editing ? (
          <div style={styles.editContainer}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              style={styles.input}
            />
            <button onClick={handleSave} style={styles.saveButton}>Save</button>
          </div>
        ) : (
          <div>
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.quantity}>Quantity: {product.quantity}</p>
            <button onClick={() => setEditing(true)} style={styles.editButton}>Edit</button>
            <button onClick={() => onDelete(product.id)} style={styles.deleteButton}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '15px',
    width: '220px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  cardContent: {
    marginTop: '10px',
  },
  productName: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
  quantity: {
    fontSize: '14px',
    color: '#888',
    margin: '10px 0',
  },
  editContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '10px',
  },
  input: {
    padding: '8px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    margin: '5px 0',
  },
  saveButton: {
    backgroundColor: '#27ae60',
    color: '#fff',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  editButton: {
    backgroundColor: '#f39c12',
    color: '#fff',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default ProductCatalogCard;
