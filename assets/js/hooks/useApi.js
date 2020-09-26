import axios from 'axios';
import {reset} from 'redux-form';
import store from '../store';
import {createRepositorySuccess, getCommitsSuccess, apiError} from '../store/actions/CommitActions';
import {CREATE_REPOSITORY_ENDPOINT, GET_COMMITS_ENDPOINT, API_MESSAGES} from '../utils/api';

function useApi() {
  async function getCommits({querystring, params}) {
    const endpoint = (() => {
      if (querystring) {
        return querystring;
      }

      if (params) {
        const mappedParams = Object.entries(params)
          .map(param => `&${param[0]}=${param[1]}`)
          .join();

        return `${GET_COMMITS_ENDPOINT}?${mappedParams.substr(1)}`;
      }

      return GET_COMMITS_ENDPOINT;
    })();

    axios
      .get(endpoint)
      .then(response => {
        store.dispatch(getCommitsSuccess({...response.data}));
      })
      .catch(error => store.dispatch(apiError(error.message)));
  }

  async function createRepository(values, headers, formDispatch) {
    axios
      .post(CREATE_REPOSITORY_ENDPOINT, values, {headers})
      .then(response => {
        store.dispatch(createRepositorySuccess(response.data, API_MESSAGES.CREATE_REPO.SUCCESS));
        formDispatch(reset('repoCreate'));
      })
      .catch(error => {
        store.dispatch(apiError(API_MESSAGES.CREATE_REPO[error.response.status]));
      });
  }

  return {getCommits, createRepository};
}

export default useApi;
