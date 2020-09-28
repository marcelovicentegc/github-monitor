import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Loading from '../../components/Loading';
import SidebarContainer from '../SidebarContainer';

const CommitListContainer = React.lazy(() =>
  import(/* webpackChunkName: "CommitListContainer" */ '../CommitListContainer')
);
const CreateRepoContainer = React.lazy(() =>
  import(/* webpackChunkName: "CreateRepo" */ '../CreateRepoContainer')
);

export default (
  <Router>
    <div id="wrapper" className="toggled">
      <SidebarContainer />
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <Suspense fallback={<Loading />}>
            <CreateRepoContainer />
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
