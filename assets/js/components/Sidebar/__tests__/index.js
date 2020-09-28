import React from 'react';
import {createMemoryHistory} from 'history';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {repos} from '../../../utils/mocks';
import {withRouter} from '../../../utils/render';
import Sidebar from '..';

describe('<Sidebar />', () => {
  test('renders repos', async () => {
    const getCommitsByRepo = jest.fn();
    const history = createMemoryHistory();

    const {queryAllByTestId} = render(
      withRouter(<Sidebar repositories={repos} getCommitsByRepo={getCommitsByRepo} />, {
        route: '/',
        history,
      })
    );

    const rows = queryAllByTestId('repo');
    expect(rows.length).toBe(repos.length);

    rows.forEach((row, i) => {
      expect(row).toHaveTextContent(repos[i].name);
    });
  });

  test('button with getCommitsByRepo signature is callable', async () => {
    const getCommitsByRepo = jest.fn();
    const history = createMemoryHistory();

    const {getByText} = render(
      withRouter(<Sidebar repositories={repos} getCommitsByRepo={getCommitsByRepo} />, {
        route: '/',
        history,
      })
    );

    repos.forEach(repo => {
      const button = getByText(repo.name);
      expect(button).toBeVisible();
      fireEvent.click(button);
    });

    expect(getCommitsByRepo).toHaveBeenCalledTimes(repos.length);
  });

  test('logout button is visible', async () => {
    const getCommitsByRepo = jest.fn();
    const history = createMemoryHistory();

    const {getByText} = render(
      withRouter(<Sidebar repositories={repos} getCommitsByRepo={getCommitsByRepo} />, {
        route: '/',
        history,
      })
    );

    const logoutButton = getByText('Logout');
    expect(logoutButton).toBeVisible();
  });
});
