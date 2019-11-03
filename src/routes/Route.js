import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../Pages/_layouts/auth';
import DefaultLayout from '../Pages/_layouts/default';

import { store } from '../store';

export default function RouteWraper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { singned } = store.getState().auth;

  if (!singned && isPrivate) {
    return <Redirect to="/" />;
  }

  if (singned && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = singned ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWraper.protoTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWraper.defaultProps = {
  isPrivate: false,
};
