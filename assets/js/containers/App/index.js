import React, {Suspense} from 'react';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Loading from '../../components/Loading';

const CommitListContainer = React.lazy(() =>
  import(/* webpackChunkName: "CommitListContainer" */ '../CommitList')
);
const CreateRepo = React.lazy(() => import(/* webpackChunkName: "CreateRepo" */ '../CreateRepo'));

export default (
  <Router>
    <div id="wrapper" className="toggled">
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <Link to="/">Github Monitor</Link>
          </li>
        </ul>
      </div>

      <div id="page-content-wrapper">
        <div className="container-fluid">
          <Suspense fallback={<Loading />}>
            <CreateRepo />
          </Suspense>
          <Switch>
            <Route path="/" exact>
              <Suspense fallback={<Loading />}>
                <CommitListContainer />
              </Suspense>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);
