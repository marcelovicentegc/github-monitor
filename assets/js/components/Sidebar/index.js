import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Sidebar = ({repositories, getCommitsByRepo}) => (
  <div id="sidebar-wrapper">
    <ul className="sidebar-nav">
      <li className="sidebar-brand">
        <Link to="/">Github Monitor</Link>
      </li>
      {repositories.map(repo => (
        <li>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => getCommitsByRepo(repo.name)}
          >
            {repo.name}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

Sidebar.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape())).isRequired,
  getCommitsByRepo: PropTypes.func.isRequired,
};

export default Sidebar;
