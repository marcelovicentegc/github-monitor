import axios from 'axios';
import {reset} from 'redux-form';
import store from '../store';
import {createRepositorySuccess, getCommitsSuccess} from '../store/actions/CommitActions';
import {CREATE_REPOSITORY_ENDPOINT, GET_COMMITS_ENDPOINT} from '../utils/endpoints';

function useApi() {
  async function getCommits({page, querystring}) {
    const endpoint = (() => {
      if (querystring) {
        return querystring;
      }

      if (page) {
        return `${GET_COMMITS_ENDPOINT}?page=${page}`;
      }

      return GET_COMMITS_ENDPOINT;
    })();

    axios.get(endpoint).then(response => {
      store.dispatch(getCommitsSuccess({...response.data}));
    });
  }

  async function createRepository(values, headers, formDispatch) {
    axios
      .post(CREATE_REPOSITORY_ENDPOINT, values, {headers})
      .then(response => {
        store.dispatch(createRepositorySuccess(response.data, true));
        formDispatch(reset('repoCreate'));
      })
      .catch(error => {
        const err = error.response;
        console.log(err);
      });
  }

  return {getCommits, createRepository};
}

export default useApi;
