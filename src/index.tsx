import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { loadConfig } from './utils/configLoader';

const initApp = async () => {
  try {
    await loadConfig();
    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Failed to initialize app:', error);
    document.getElementById('root')!.innerHTML =
      '설정을 불러오는 중 오류가 발생했습니다.';
  }
};

initApp();
