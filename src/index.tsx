import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './features/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StoreProvider store={store}>
    <App name={'jarvis-webservice'} />
  </StoreProvider>
);
