import React from 'react';
import PropTypes from 'prop-types';
import {generateKey} from '../../utils/generateKey';

const Pagination = ({data, getData}) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <nav aria-label="Commit list navigation">
        <ul className="pagination">
          {data.previous && (
            <li className="page-item">
              <button
                className="page-link"
                type="button"
                onClick={() => getData({querystring: data.previous})}
              >
                Previous
              </button>
            </li>
          )}
          {Array.from(new Array(data.total_pages)).map((_, i) => {
            const isActive = data.current_page === i + 1;

            return (
              <li className={`page-item ${isActive ? 'active' : ''}`} key={generateKey(20)}>
                <button
                  className="page-link"
                  type="button"
                  onClick={() => getData({params: {page: i + 1}})}
                >
                  {i + 1}
                </button>
                {isActive && <span className="sr-only">(current)</span>}
              </li>
            );
          })}
          {data.next && (
            <li className="page-item">
              <button
                className="page-link"
                type="button"
                onClick={() => getData({querystring: data.next})}
              >
                Next
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape()).isRequired,
  getData: PropTypes.func.isRequired,
};

export default Pagination;
