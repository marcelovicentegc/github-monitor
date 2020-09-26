import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '../Pagination';

const CommitList = ({commits, getCommits}) => {
  return (
    <div>
      {commits?.results.length > 0 && (
        <div>
          <div className="card card-outline-secondary my-4">
            <div className="card-header">Commit List</div>
            <div className="card-body">
              {commits.results.map((commit, index) => (
                <div key={commit.sha}>
                  <div className="avatar">
                    <img alt={commit.author} className="img-author" src={commit.avatar} />
                  </div>
                  <div className="commit-details">
                    <p>{commit.message}</p>
                    <small className="text-muted">
                      {commit.author} authored on {commit.repository} at {commit.date}
                    </small>
                    {index !== commits.results.length - 1 && <hr />}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {commits.total_pages > 1 && <Pagination data={commits} getData={getCommits} />}
        </div>
      )}
    </div>
  );
};

CommitList.propTypes = {
  commits: PropTypes.objectOf(PropTypes.shape()).isRequired,
  getCommits: PropTypes.func.isRequired,
};

export default CommitList;
