import React from 'react';
import { Redirect, Route, RouteProps, RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ROUTES } from 'constants/routes';
import { StoreState } from 'store';
import { getAuthData } from 'api/localStorage';

const PrivateRoute: React.FC<RouteProps> = ({ component: Component, render, ...rest }) => {
  const auth = useSelector((state: StoreState) => state.auth);

  const authData = getAuthData();

  const renderComponent = (props: RouteComponentProps) => {
    if (auth.user || authData.token) {
      return Component ? <Component {...props} /> : null;
    } else {
      return <Redirect to={{ pathname: ROUTES.login, state: { from: props.location } }} />;
    }
  };

  return <Route {...rest} render={render || renderComponent} />;
};

export default PrivateRoute;
