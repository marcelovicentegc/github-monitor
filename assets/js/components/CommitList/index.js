import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '../Pagination';
import {generateKey} from '../../utils/generateKey';

const Button = ({children, onClick}) => (
  <button
    className="btn btn-link text-nowrap btn-sm p-0"
    style={{
      fontSize: 'inherit',
    }}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

const CommitList = ({commits, getCommits, filters, removeFilter, applyFilter}) => {
  return (
    <div>
      {filters.length > 0 && (
        <div className="d-flex p-2 my-4">
          {filters.map(filter => (
            <span
              key={generateKey(20)}
              className="badge badge-info ml-2 d-inline-flex align-items-center"
              style={{
                cursor: 'pointer',
              }}
              data-toggle="tooltip"
              data-placement="top"
              title="Click to remove filter"
              role="button"
              onClick={() => removeFilter(filter)}
              onKeyDown={() => removeFilter(filter)}
              tabIndex={0}
            >
              {Object.values(filter)[0]}
            </span>
          ))}
        </div>
      )}
      {commits?.results.length > 0 && (
        <div>
          <div id="commit-list" className="card card-outline-secondary my-4">
            <div className="card-header">Commit List</div>
            <div className="card-body">
              {commits.results.map((commit, index) => (
                <div key={`${commit.sha}-${commit.message.slice(0, 10)}`} data-testid="commit">
                  <div className="avatar">
                    <img alt={commit.author} className="img-author" src={commit.avatar} />
                  </div>
                  <div className="commit-details">
                    <p>{commit.message}</p>
                    <small className="text-muted">
                      <Button onClick={() => applyFilter({author: commit.author})}>
                        {commit.author}
                      </Button>{' '}
                      authored on{' '}
                      <Button onClick={() => applyFilter({repository__name: commit.repository})}>
                        {commit.repository}
                      </Button>{' '}
                      at {commit.date}
                    </small>
                    {index !== commits.results.length - 1 && <hr />}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {commits.total_pages > 1 && (
            <Pagination data={commits} getData={getCommits} filters={filters} />
          )}
        </div>
      )}
    </div>
  );
};

CommitList.propTypes = {
  commits: PropTypes.objectOf(PropTypes.shape()).isRequired,
  filters: PropTypes.arrayOf(PropTypes.string),
  getCommits: PropTypes.func.isRequired,
  applyFilter: PropTypes.func.isRequired,
  removeFilter: PropTypes.func.isRequired,
};

CommitList.defaultProps = {
  filters: [],
};

export default CommitList;
