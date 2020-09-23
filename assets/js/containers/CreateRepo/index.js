import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createRepository} from '../../api';
import CreateRepoForm from '../../components/CreateRepo';

class CreateRepo extends React.Component {
  submit = (values, dispatch) => {
    const token = document.getElementById('main').dataset.csrftoken;
    const name = values.name.split('/')[0];
    const repo = values.name.split('/')[1];
    const data = {name, repo};
    return createRepository(data, {'X-CSRFToken': token}, dispatch);
  };

  render() {
    const {successMessage} = this.props;

    return <CreateRepoForm onSubmit={this.submit} successMessage={successMessage} />;
  }
}

CreateRepo.propTypes = {
  successMessage: PropTypes.bool.isRequired,
};

const mapStateToProps = store => ({
  successMessage: store.commitState.successMessage,
});

export default connect(mapStateToProps)(CreateRepo);
