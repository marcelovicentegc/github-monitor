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

  compareObjs = (obj1, obj2, type = 'equal') => {
    return type === 'equal'
      ? JSON.stringify(obj1) === JSON.stringify(obj2)
      : JSON.stringify(obj1) !== JSON.stringify(obj2);
  };

  removeFilter = filter => {
    const {filters} = this.props;

    const currentFilterIndex = filters.findIndex(f => this.compareObjs(f, filter));

    filters.splice(currentFilterIndex, 1);

    getCommits({params: {...filters[0]}});
  };

  applyFilter = filter => {
    const {filters} = this.props;

    const isApplied = filters.findIndex(f => this.compareObjs(f, filter));

    const currentFilters = filters.find(f => this.compareObjs(f, filter, 'notEqual'));

    if (isApplied > -1) return;

    filters.push(filter);

    getCommits({params: {...filter, ...currentFilters}});
  };

  render() {
    const {commits, filters} = this.props;
    const {isLoading} = this.state;

    return (
      <div>
        {isLoading && <Loading />}
        {!isLoading && commits?.results && (
          <CommitList
            commits={commits}
            getCommits={getCommits}
            filters={filters}
            removeFilter={this.removeFilter}
            applyFilter={this.applyFilter}
          />
        )}
      </div>
    );
  }
}

CommitListContainer.propTypes = {
  commits: PropTypes.objectOf(PropTypes.shape()).isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = store => ({
  commits: store.commitState.commits,
  filters: store.commitState.filters,
});

export default connect(mapStateToProps)(CommitListContainer);
