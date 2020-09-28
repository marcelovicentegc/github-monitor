/* eslint-disable import/prefer-default-export */
import React from 'react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router';

export const withRouter = (
  children,
  {route = '/', history = createMemoryHistory({initialEntries: [route]})} = {}
) => {
  return <Router history={history}>{children}</Router>;
};
