import React from 'react';
import PropTypes from 'prop-types';
import CommitList from '../../components/CommitList';
import useApi from '../../hooks/useApi';
import Loading from '../../components/Loading';
import WithFilterMethods from '../../hocs/WithFilterMethods';

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
    const {commits, filters, applyFilter, removeFilter} = this.props;
    const {isLoading} = this.state;

    return (
      <div>
        {isLoading && <Loading />}
        {!isLoading && commits?.results && (
          <CommitList
            commits={commits}
            getCommits={getCommits}
            filters={filters}
            removeFilter={removeFilter}
            applyFilter={applyFilter}
          />
        )}
      </div>
    );
  }
}

CommitListContainer.propTypes = {
  commits: PropTypes.objectOf(PropTypes.shape()).isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeFilter: PropTypes.func.isRequired,
  applyFilter: PropTypes.func.isRequired,
};

export default WithFilterMethods(CommitListContainer);
