import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';

import store from 'store/index';
import { Router } from 'react-router-dom';
import history from 'shared/history';
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <SnackbarProvider maxSnack={5} autoHideDuration={3000}>
        <App />
      </SnackbarProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
