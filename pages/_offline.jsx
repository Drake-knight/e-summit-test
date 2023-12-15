import React from 'react';

const OfflinePage = () => {

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <p style={styles.text}>Sorry, you are offline.</p>
        <button style={styles.button} onClick={() => window.location.reload()}>
          Reload
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  content: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
  },
  text: {
    fontSize: '20px',
    color: '#555',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '15px',
  },
};

export default OfflinePage;
