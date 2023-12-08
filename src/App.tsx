import { Provider } from 'react-redux';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import store from './features/store';
import DrawerLayout from './components/general/DrawerLayout';
import ChartGrid from './components/stock/ChartGrid';

const App: React.FC = () => {
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'cupcake';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="*"
              element={
                <DrawerLayout>
                  <Routes>
                    <Route path="/self-picked" element={<ChartGrid />} />
                    {/* Navigate to login page if no other route matches */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                    {/* Add other routes here */}
                  </Routes>
                </DrawerLayout>
              }
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
