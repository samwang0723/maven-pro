import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authLogin } from '../../features/slices/authSlice';
import { AppDispatch } from '../../features/store';

const Login = () => {
  const dispatch: AppDispatch = useDispatch();

  // reference to input elements
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const doLogin = () => {
    dispatch(
      authLogin({
        email: usernameRef.current!.value,
        password: passwordRef.current!.value,
      })
    ).then((result) => {
      if (result.payload) {
        navigate('/chart-grid');
      }
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={usernameRef} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordRef} />
      </div>
      <div>
        <button onClick={doLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
