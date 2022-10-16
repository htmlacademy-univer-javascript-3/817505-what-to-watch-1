import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App movie={{ movieTitle:'The Grand Budapest Hotel', movieGenre: 'Drama', movieReleaseDate: '2014' }} />
  </React.StrictMode>,
);
