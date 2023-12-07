import React from 'react';
import { useEffect } from 'react';
import './App.css';
import { AppDispatch } from './features/store';
import { useSelector, useDispatch } from 'react-redux';
import { performLogin, selectAuth } from './features/slices/authSlice';

interface AppProps {
  name?: string;
}

const App: React.FC<AppProps> = ({ name }) => {
  const auth = useSelector(selectAuth);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (auth.accessToken) {
      return;
    }

    dispatch(
      performLogin({
        email: 'sam.wang.0723@gmail.com',
        password: 'abcd1234',
      })
    );
  }, []);

  console.log('auth', auth);
  return <div className="App">{auth.accessToken}</div>;
};

export default App;
