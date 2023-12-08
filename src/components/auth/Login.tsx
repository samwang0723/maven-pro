import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { jarvisApi } from '../../features/apis/jarvisApi';
import { setToken } from '../../features/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../features/store';

const Login = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  // const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading }] = jarvisApi.useJarvisV1LoginMutation();

  const handleLogin = async () => {
    try {
      const response = await login({
        v1LoginRequest: { email, password },
      }).unwrap();
      dispatch(setToken(response?.accessToken || ''));
      navigate('/self-picked');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card w-96 shadow-xl bg-base-200">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                onClick={handleLogin}
                disabled={isLoading}
              >
                Login
              </button>
            </div>
          </form>
          {/* Divider */}
          <div className="divider">
            <span className="label-text">OR</span>
          </div>

          {/* Signup link */}
          <div className="flex justify-center">
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Signup for an account
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
