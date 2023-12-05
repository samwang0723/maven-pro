import { useState, useEffect } from 'react';

const login = (email, password) => {
  const [bearerToken, setBearerToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchBearerToken = async () => {
      try {
        const headers = {
          'Content-Type': 'application/json',
        };
        const loginResponse = await fetch(
          'https://daily.jarvis-stock.tw/v1/login',
          {
            method: 'POST',
            headers,
            body: JSON.stringify({ email, password }),
          }
        );
        if (!loginResponse.ok) {
          throw new Error(`HTTP error! status: ${loginResponse.status}`);
        }
        const loginData = await loginResponse.json();
        setBearerToken(loginData.accessToken);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchBearerToken();
  }, [email, password]);

  return { bearerToken, loading, error };
};

export default login;
