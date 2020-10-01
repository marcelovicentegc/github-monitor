import axios from 'axios';
import {reset} from 'redux-form';
import store from '../store';
import {
  getCommitsAction,
  getCommitsByAuthorAction,
  getCommitsByRepoAction,
} from '../store/actions/CommitActions';
import {setSuccessMessageAction, setErrorMessageAction} from '../store/actions/MessageActions';
import {getRepositoriesAction} from '../store/actions/RepoActions';
import {
  REPOSITORIES_ENDPOINT,
  GET_COMMITS_ENDPOINT,
  API_MESSAGES,
  mapParams,
  GET_COMMITS_BY_REPO_ENDPOINT,
  GET_COMMITS_BY_AUTHOR_ENDPOINT,
} from '../utils/api';

function useApi() {
  async function getCommits({querystring, params}) {
    const endpoint = (() => {
      if (querystring) {
        if (params.length > 0) {
          return `${querystring}&${mapParams(params)}`;
        }

        return querystring;
      }

      if (params) {
        return `${GET_COMMITS_ENDPOINT}?${mapParams(params)}`;
      }

      return GET_COMMITS_ENDPOINT;
    })();

    await axios
      .get(endpoint)
      .then(response => {
        store.dispatch(getCommitsAction({...response.data}));
      })
      .catch(error => store.dispatch(setErrorMessageAction(error.message)));
  }

  async function createRepository(values, headers, formDispatch) {
    await axios
      .post(REPOSITORIES_ENDPOINT, values, {headers})
      .then(() => {
        store.dispatch(setSuccessMessageAction(API_MESSAGES.CREATE_REPO.SUCCESS));
        formDispatch(reset('repoCreate'));
      })
      .catch(error => {
        store.dispatch(setErrorMessageAction(API_MESSAGES.CREATE_REPO[error.response.status]));
      });
  }

  async function getRepositories({params}) {
    const endpoint = (() => {
      if (params) {
        return `${REPOSITORIES_ENDPOINT}?${mapParams(params)}`;
      }

      return REPOSITORIES_ENDPOINT;
    })();

    await axios
      .get(endpoint)
      .then(response => {
        store.dispatch(store.dispatch(getRepositoriesAction(response.data)));
      })
      .catch(error => {
        store.dispatch(setErrorMessageAction(error.message));
      });
  }

  async function getCommitsByRepo() {
    await axios
      .get(GET_COMMITS_BY_REPO_ENDPOINT)
      .then(response => {
        store.dispatch(getCommitsByRepoAction(response.data));
      })
      .catch(error => {
        store.dispatch(setErrorMessageAction(error.message));
      });
  }

  async function getCommitsByAuthor() {
    await axios
      .get(GET_COMMITS_BY_AUTHOR_ENDPOINT)
      .then(response => {
        store.dispatch(getCommitsByAuthorAction(response.data));
      })
      .catch(error => {
        store.dispatch(setErrorMessageAction(error.message));
      });
  }

  return {getCommits, createRepository, getRepositories, getCommitsByRepo, getCommitsByAuthor};
}

export default useApi;
