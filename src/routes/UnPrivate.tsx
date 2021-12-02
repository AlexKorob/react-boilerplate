import React from 'react';
import { Redirect, Route, RouteProps, RouteComponentProps } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { shallowEqual, useSelector } from 'react-redux';
import { StoreState } from 'store';
import { getAuthData } from 'api/localStorage';

const UnPrivateRoute: React.FC<RouteProps> = ({ component: Component, render, ...rest }) => {
  const user = useSelector((state: StoreState) => state.auth.user, shallowEqual);

  const authData = getAuthData();

  const renderComponent = (props: RouteComponentProps) => {
    if (!user || !authData.token) {
      return Component ? <Component {...props} /> : null;
    } else {
      return <Redirect to={ROUTES.main} />;
    }
  };

  return <Route {...rest} render={render || renderComponent} />;
};

export default UnPrivateRoute;
