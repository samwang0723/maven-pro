import React, { createContext, useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Navbar from './components/general/Navbar';
import Sidebar from './components/general/Sidebar';
import Footer from './components/general/Footer';
import Header from './components/general/Header';
import SelfPicked from './components/pages/SelfPicked';
import Signup from './components/auth/Signup';
import Forgotpassword from './components/auth/Forgotpassword';
import DailyAnalysis from './components/pages/DailyAnalysis';
import Dashboard from './components/pages/Dashboard';
import { selectAuth, setToken } from './features/slices/authSlice';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

// Create a context for theme management
const ThemeContext = createContext({
  theme: 'default',
  setTheme: (theme) => {},
});

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

function RequireAuth({ children }) {
  const auth = useSelector(selectAuth);
  let authed = false;
  if (auth.token === null) {
    const token = Cookies.get('token');
    if (token) {
      setToken(token);
      authed = true;
    }
  } else {
    authed = true;
  }

  return authed === true ? children : <Navigate to="/login" replace />;
}

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

  // State to manage the theme
  const [theme, setTheme] = useState('default');

  // Effect to initialize the theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('hs_theme') || 'default';
    setTheme(
      savedTheme === 'auto'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'default'
        : savedTheme
    );
  }, []);

  // Effect to update the theme in localStorage and apply it to the document
  useEffect(() => {
    localStorage.setItem('hs_theme', theme);
    const htmlClassList = document.documentElement.classList;
    htmlClassList.remove('dark', 'default', 'auto');
    htmlClassList.add(theme);

    // Dispatch custom event if needed
    window.dispatchEvent(
      new CustomEvent('on-hs-appearance-change', { detail: theme })
    );
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (theme === 'auto') {
        setTheme(e.matches ? 'dark' : 'default');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
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
            path="/"
            element={
              <RequireAuth>
                <Header />
                <Navbar />
                <Sidebar />
                <div className="w-full pt-4 px-4 sm:px-6 md:px-8 lg:ps-72">
                  <Outlet />
                  <Footer />
                </div>
              </RequireAuth>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/watchlist" element={<SelfPicked />} />
            <Route path="/analysis" element={<DailyAnalysis />} />
          </Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
