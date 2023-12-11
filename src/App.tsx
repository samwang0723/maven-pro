import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';

import Navbar from './components/general/Navbar';
import Sidebar from './components/general/Sidebar';
import Footer from './components/general/Footer';
import Header from './components/general/Header';
import SelfPicked from './components/pages/SelfPicked';
import Signup from './components/auth/Signup';
import Forgotpassword from './components/auth/Forgotpassword';

const App: React.FC = () => {
  const location = useLocation();

  // Preline setup
  useEffect(() => {
    require('preline/preline');
  }, []);

  useEffect(() => {
    // @ts-ignore
    HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            <div className="flex items-center justify-center min-h-screen">
              <Login />
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div className="flex items-center justify-center min-h-screen">
              <Signup />
            </div>
          }
        />
        <Route
          path="/forgotpassword"
          element={
            <div className="flex items-center justify-center min-h-screen">
              <Forgotpassword />
            </div>
          }
        />

        <Route
          path="*"
          element={
            <>
              <Header />
              <Navbar />
              <Sidebar />
              <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
                <Routes>
                  <Route path="/self-picked" element={<SelfPicked />} />
                  {/* Navigate to login page if no other route matches */}
                  <Route path="*" element={<Navigate to="/login" replace />} />
                  {/* Add other routes here */}
                </Routes>
                <Footer />
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
