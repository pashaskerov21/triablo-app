import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './asset/scss/app.scss'
import App from './App';
import MainContextProvider from './context/MainContextProvider';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </Provider>
);

