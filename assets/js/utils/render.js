import React from 'react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router';
import {Provider} from 'react-redux';
import store from '../store';

export const withRouter = (
  children,
  {route = '/', history = createMemoryHistory({initialEntries: [route]})} = {}
) => {
  return <Router history={history}>{children}</Router>;
};

export const withStore = children => <Provider store={store}>{children}</Provider>;

export const withRootHtml = children => (
  <div
    id="main"
    dataset={{
      username: 'marcelovicentegc',
      csrftoken: 'MUHhiokx9AHFply5L2xAOfjRkE',
    }}
  >
    {children}
  </div>
);
