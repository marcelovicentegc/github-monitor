import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import List from '../../components/List';
import useApi from '../../hooks/useApi';

const {getCommitsByAuthor} = useApi();

class CommitsByAuthorContainer extends Component {
  async componentDidMount() {
    await getCommitsByAuthor();
  }

  render() {
    const {commitsByAuthor} = this.props;

    return <List data={commitsByAuthor} keys={['author', 'commits']} />;
  }
}

CommitsByAuthorContainer.propTypes = {
  commitsByAuthor: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = store => ({
  commitsByAuthor: store.commitStore.commitsByAuthor,
});

export default connect(mapStateToProps)(CommitsByAuthorContainer);
