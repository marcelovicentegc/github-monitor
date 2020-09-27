import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import useApi from '../hooks/useApi';
import store from '../store';
import {setFiltersAction} from '../store/actions/CommitActions';

const WithFilterMethods = Component => {
  const {getCommits} = useApi();
  const mapStateToProps = state => ({
    filters: state.commitStore.filters,
    commits: state.commitStore.commits,
  });

  class HOC extends React.Component {
    compareObjs = (obj1, obj2, type = 'equal') => {
      return type === 'equal'
        ? JSON.stringify(obj1) === JSON.stringify(obj2)
        : JSON.stringify(obj1) !== JSON.stringify(obj2);
    };

    areKeysEqual = (obj1, obj2) => {
      return JSON.stringify(Object.keys(obj1)[0]) === JSON.stringify(Object.keys(obj2)[0]);
    };

    removeFilter = filter => {
      const {filters} = this.props;

      const currentFilterIndex = filters.findIndex(f => this.compareObjs(f, filter));

      filters.splice(currentFilterIndex, 1);

      store.dispatch(setFiltersAction(filters));

      getCommits({params: {...filters[0]}});
    };

    applyFilter = filter => {
      const {filters} = this.props;

      const isApplied = filters.findIndex(f => this.compareObjs(f, filter));

      if (isApplied > -1) return;

      const currentFilters = filters.find((f, filterIndex) => {
        const shouldRemove = this.areKeysEqual(f, filter);

        if (shouldRemove) {
          filters.splice(filterIndex, 1);
          return false;
        }

        return this.compareObjs(f, filter, 'notEqual');
      });

      filters.push(filter);

      store.dispatch(setFiltersAction(filters));

      getCommits({params: {...filter, ...currentFilters}});
    };

    render() {
      const {filters, commits} = this.props;

      return (
        <Component
          removeFilter={this.removeFilter}
          applyFilter={this.applyFilter}
          filters={filters}
          commits={commits}
        />
      );
    }
  }

  HOC.propTypes = {
    commits: PropTypes.objectOf(PropTypes.shape()).isRequired,
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  return connect(mapStateToProps)(HOC);
};

WithFilterMethods.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WithFilterMethods;
