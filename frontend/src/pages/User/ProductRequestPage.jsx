import React, { useState } from 'react';

const ProductRequestPage = () => {
  const [requests, setRequests] = useState([
    { id: 1, userName: 'Alice', productName: 'Tidbit - Chocolate Bar', reason: 'Craving for something sweet', quantity: 2 },
    { id: 2, userName: 'Bob', productName: 'Stationary - Notebook', reason: 'For taking notes during meetings', quantity: 5 },
    { id: 3, userName: 'Charlie', productName: 'Tidbit - Biscuit Pack', reason: 'Snack for the office break', quantity: 3 },
  ]);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Product Request Page</h1>
      <div style={styles.requestsContainer}>
        {requests.length > 0 ? (
          requests.map((request) => (
            <div key={request.id} style={styles.requestCard}>
              <p style={styles.requestInfo}>
                <strong>User:</strong> {request.userName}
              </p>
              <p style={styles.requestInfo}>
                <strong>Requested Product:</strong> {request.productName}
              </p>
              <p style={styles.requestInfo}>
                <strong>Reason:</strong> {request.reason}
              </p>
              <p style={styles.requestInfo}>
                <strong>Quantity:</strong> {request.quantity}
              </p>
            </div>
          ))
        ) : (
          <p style={styles.noRequests}>No product requests available.</p>
        )}
      </div>
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
  requestsContainer: {
    width: '100%',
    maxWidth: '800px',
  },
  requestCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '15px',
  },
  requestInfo: {
    fontSize: '18px',
    color: '#333',
    margin: '5px 0',
  },
  noRequests: {
    fontSize: '18px',
    color: '#888',
    textAlign: 'center',
  },
};

export default ProductRequestPage;
