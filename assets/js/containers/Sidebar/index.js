import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import Sidebar from '../../components/Sidebar';
import WithFilterMethods from '../../hocs/WithFilterMethods';
import useApi from '../../hooks/useApi';

const SidebarContainer = ({applyFilter}) => {
  const {getRepositories} = useApi();
  const repositories = useSelector(state => state.repoStore.repositories);
  useEffect(() => {
    getRepositories({});
  }, []);

  const getCommitsByRepo = repoName => {
    applyFilter({repository__name: repoName});
  };

  return <Sidebar repositories={repositories} getCommitsByRepo={getCommitsByRepo} />;
};

SidebarContainer.propTypes = {
  applyFilter: PropTypes.func.isRequired,
};

export default WithFilterMethods(SidebarContainer);
