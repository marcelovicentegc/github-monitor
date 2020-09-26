import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import useApi from '../../hooks/useApi';
import CreateRepoForm from '../../components/CreateRepo';

const {createRepository} = useApi();

class CreateRepo extends React.Component {
  submit = (values, dispatch) => {
    const token = document.getElementById('main').dataset.csrftoken;
    const name = values.name.split('/')[0];
    const repo = values.name.split('/')[1];
    const data = {name, repo};
    return createRepository(data, {'X-CSRFToken': token}, dispatch);
  };

  render() {
    const {successMessage, errorMessage} = this.props;

    return (
      <CreateRepoForm
        onSubmit={this.submit}
        successMessage={successMessage}
        errorMessage={errorMessage}
      />
    );
  }
}

CreateRepo.propTypes = {
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
};

CreateRepo.defaultProps = {
  successMessage: '',
  errorMessage: '',
};

const mapStateToProps = store => ({
  successMessage: store.commitState.successMessage,
  errorMessage: store.commitState.errorMessage,
});

export default connect(mapStateToProps)(CreateRepo);
