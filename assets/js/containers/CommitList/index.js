import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CommitList from '../../components/CommitList';
import {getCommits} from '../../api';

const mapStateToProps = store => ({
  commits: store.commitState.commits,
});

class CommitListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }

  async componentDidMount() {
    this.setState({isLoading: true});
    await getCommits();
    this.setState({isLoading: false});
  }

  render() {
    const {commits} = this.props;
    const {isLoading} = this.state;

    return (
      <div>
        {isLoading && <h1>Loading...</h1>}
        {!isLoading && commits?.results && <CommitList commits={commits} />}
      </div>
    );
  }
}

CommitListContainer.propTypes = {
  commits: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps)(CommitListContainer);
