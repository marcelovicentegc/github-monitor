import React from 'react';
import PropTypes from 'prop-types';
import {generateKey} from '../../utils/generateKey';

const List = ({data, keys}) => (
  <div className="d-flex flex-column p-4">
    {data && data.length > 0 ? (
      data.map(item => (
        <div className="d-flex flex-row" key={generateKey(20)}>
          <span>{item[keys[0]]}:</span>
          <pre> </pre>
          <span>{item[keys[1]]}</span>
        </div>
      ))
    ) : (
      <span>No data</span>
    )}
  </div>
);

List.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape()).isRequired,
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
