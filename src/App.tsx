import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import ChartGrid from './components/stock/ChartGrid';

interface AppProps {
  name?: string;
}

const App: React.FC<AppProps> = ({ name }) => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chart-grid" element={<ChartGrid />} />
          {/* Navigate to login page if no other route matches */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
