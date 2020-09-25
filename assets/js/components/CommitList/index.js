import React from 'react';
import PropTypes from 'prop-types';
import {generateKey} from '../../utils/generateKey';

const PAGE_SIZE = 10;

const CommitList = props => {
  const {commits} = props;

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
                    {index !== PAGE_SIZE - 1 && <hr />}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {commits && (
            <div className="d-flex align-items-center justify-content-center">
              <nav aria-label="Commit list navigation">
                <ul className="pagination">
                  {commits.previous && (
                    <li className="page-item">
                      <button className="page-link" type="button">
                        Previous
                      </button>
                    </li>
                  )}
                  {Array.from(new Array(commits.total_pages)).map((_, i) => {
                    const isActive = commits.current_page === i + 1;

                    return (
                      <li className={`page-item ${isActive ? 'active' : ''}`} key={generateKey(20)}>
                        <button
                          className="page-link"
                          type="button"
                          onClick={() => {
                            // getData
                            return null;
                          }}
                        >
                          {i + 1}
                        </button>
                        {isActive && <span className="sr-only">(current)</span>}
                      </li>
                    );
                  })}
                  {commits.next && (
                    <li className="page-item">
                      <button className="page-link" type="button">
                        Next
                      </button>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

CommitList.propTypes = {
  commits: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default CommitList;
