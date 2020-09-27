export const GET_COMMITS_ENDPOINT = '/api/commits/';
export const REPOSITORIES_ENDPOINT = '/api/repositories/';

export const API_MESSAGES = {
  CREATE_REPO: {
    SUCCESS: 'Repository added successfully!',
    409: 'This repository was already added',
    500: 'Sorry, something went wrong while adding the repository',
  },
};

export function mapParams(params) {
  return Object.entries(params)
    .map(param => `&${param[0]}=${param[1]}`)
    .join('')
    .substr(1);
}
