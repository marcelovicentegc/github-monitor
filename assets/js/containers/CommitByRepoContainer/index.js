import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import List from '../../components/List';
import useApi from '../../hooks/useApi';

const {getCommitsByRepo} = useApi();

class CommitsByRepoContainer extends Component {
  async componentDidMount() {
    await getCommitsByRepo();
  }

  render() {
    const {commitsByRepo} = this.props;

    return <List data={commitsByRepo} keys={['repository', 'commits']} />;
  }
}

CommitsByRepoContainer.propTypes = {
  commitsByRepo: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = store => ({
  commitsByRepo: store.commitStore.commitsByRepo,
});

export default connect(mapStateToProps)(CommitsByRepoContainer);
