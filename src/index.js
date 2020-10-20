import React from 'react';
import ReactDOM from 'react-dom';
import { Globals } from './global/global';
import MainWindow from './MainWindow';

ReactDOM.render(
  <React.StrictMode>
    <Globals />
    <MainWindow />
  </React.StrictMode>,
  document.getElementById('root')
);