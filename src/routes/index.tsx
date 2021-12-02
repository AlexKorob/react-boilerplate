import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from 'pages/Login';
import { ROUTES } from 'constants/routes';
import UnPrivateRoute from 'routes/UnPrivate';
import NotFound from 'shared/components/NotFound';

const Routes = () => {
  return (
    <Switch>
      <UnPrivateRoute exact path={ROUTES.login} component={LoginPage} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
