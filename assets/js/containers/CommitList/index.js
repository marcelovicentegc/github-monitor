import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CommitList from '../../components/CommitList';
import useApi from '../../hooks/useApi';
import Loading from '../../components/Loading';

const {getCommits} = useApi();

class CommitListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }

  async componentDidMount() {
    this.setState({isLoading: true});
    await getCommits({});
    this.setState({isLoading: false});
  }

  render() {
    const {commits} = this.props;
    const {isLoading} = this.state;

    return (
      <div>
        {isLoading && <Loading />}
        {!isLoading && commits?.results && <CommitList commits={commits} getCommits={getCommits} />}
      </div>
    );
  }
}

CommitListContainer.propTypes = {
  commits: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = store => ({
  commits: store.commitState.commits,
});

export default connect(mapStateToProps)(CommitListContainer);
