import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './store';
import Main from './containers/Main';

const target = document.querySelector('#app');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Main />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
