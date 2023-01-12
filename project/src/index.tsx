import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { MOCK_MOVIE } from './mocks/film';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchFilmsAction } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchFilmsAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App movie={MOCK_MOVIE} />
    </Provider>
  </React.StrictMode>,
);
