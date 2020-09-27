import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import useApi from '../../hooks/useApi';
import CreateRepoForm from '../../components/CreateRepo';

const {createRepository, getCommits} = useApi();

class CreateRepo extends React.Component {
  submit = async (values, dispatch) => {
    const token = document.getElementById('main').dataset.csrftoken;
    const name = values.name.split('/')[0];
    const repo = values.name.split('/')[1];
    const data = {name, repo};

    await createRepository(data, {'X-CSRFToken': token}, dispatch);
    await getCommits({});
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
  successMessage: store.messageStore.successMessage,
  errorMessage: store.messageStore.errorMessage,
});

export default connect(mapStateToProps)(CreateRepo);
