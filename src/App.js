import React from 'react';
import './App.css';
import ChartGrid from './components/ChartGrid';
import login from './api/login';
import { Spinner, Alert } from 'react-bootstrap';

function App() {
  const {bearerToken, loading, error} = login(
    'sam.wang.0723@gmail.com',
    'abcd1234'
  );
  const args = { bearerToken: bearerToken };

  // Display a spinner while loading
  if (loading) {
    return (
      <div className="App centered-content bg-dark text-white">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  // Display an error message if there is an error
  if (error) {
    return (
      <div className="App centered-content bg-dark text-white">
        <Alert variant="danger">
          Error: {error.message}
        </Alert>
      </div>
    );
  }

  // Display the ChartGrid if there is a bearerToken
  return (
    <div className="App centered-content bg-dark text-white">
      {bearerToken ? <ChartGrid {...args} /> : <div>Please log in.</div>}
    </div>
  );
}

export default App;
