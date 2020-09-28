import React from 'react';
import PropTypes from 'prop-types';
import pagination from '../../utils/pagination';

const Pagination = ({data, getData, filters}) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <nav aria-label="Commit list navigation">
        <ul className="pagination">
          {data.previous && (
            <li className="page-item">
              <button
                className="page-link"
                type="button"
                onClick={() => getData({querystring: data.previous, params: filters})}
              >
                Previous
              </button>
            </li>
          )}
          {pagination(data.current_page, data.total_pages).map(page => {
            const isActive = data.current_page === page;

            return (
              <li className={`page-item ${isActive ? 'active' : ''}`} key={page}>
                <button
                  className="page-link"
                  type="button"
                  onClick={() => {
                    const params = {};

                    if (page === '...') return;

                    filters.forEach(filter => {
                      Object.assign(params, filter);
                    });

                    Object.assign(params, {page});

                    getData({params});
                  }}
                >
                  {page}
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
                onClick={() => getData({querystring: data.next, params: filters})}
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
  filters: PropTypes.arrayOf(PropTypes.string),
};

Pagination.defaultProps = {
  filters: [],
};

export default Pagination;
