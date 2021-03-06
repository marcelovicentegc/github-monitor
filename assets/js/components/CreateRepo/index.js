import React from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import Loading from '../Loading';

const renderField = ({
  input: {name, onBlur, onChange, onDragStart, onDrop, onFocus, value},
  placeholder,
  className,
  type,
  meta: {touched, error, invalid},
}) => (
  <div>
    <input
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onDragStart={onDragStart}
      onDrop={onDrop}
      onFocus={onFocus}
      value={value}
      placeholder={placeholder}
      className={`${className} ${touched && invalid ? 'is-invalid' : ''}`}
      type={type}
    />
    {touched && error && <div className="invalid-feedback">{error}</div>}
  </div>
);

renderField.propTypes = {
  input: PropTypes.objectOf(PropTypes.shape()).isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

const Form = ({successMessage, handleSubmit, pristine, submitting, errorMessage}) => {
  return (
    <div>
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col-8">
            <Field
              name="name"
              placeholder="Enter the repository name, must match {user}/{repo}"
              className="form-control"
              component={renderField}
              type="text"
            />
          </div>
          <div className="col-4">
            <button
              disabled={pristine || submitting}
              className="btn btn-block btn-primary"
              type="submit"
            >
              Submit {submitting && <Loading />}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
};

Form.defaultProps = {
  successMessage: '',
  errorMessage: '',
};

const validate = values => {
  const {username} = document.getElementById('main').dataset;
  const errors = {};
  if (!values.name || !values.name.startsWith(`${username}/`)) {
    errors.name = `Repository must belong to you (eg: ${username}/repo-name)`;
  }
  return errors;
};

export default reduxForm({
  form: 'repoCreate',
  validate,
})(Form);
