import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import 'normalize.css';
import './global-styles.js';
import { store, history } from './store';
import Magazines from './modules/Magazines';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fragment>
        <Route exact path="/" component={Magazines} />
        {/* <Route path="/password-recovery" component={PasswordRecovery} /> */}
        {/* <Route path="/professionals/:id" component={Professional} /> */}
      </Fragment>
    </ConnectedRouter>
  </Provider>
);

export default App;
