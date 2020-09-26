import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '../Pagination';

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

const CommitList = ({commits, getCommits}) => {
  return (
    <div>
      {commits?.results.length > 0 && (
        <div>
          <div id="commit-list" className="card card-outline-secondary my-4">
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
                      <Button onClick={() => getCommits({params: {author: commit.author}})}>
                        {commit.author}
                      </Button>{' '}
                      authored on{' '}
                      <Button
                        onClick={() => getCommits({params: {repository__name: commit.repository}})}
                      >
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
