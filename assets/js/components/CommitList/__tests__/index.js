import React from 'react';
import {render} from '@testing-library/react';
import {commits} from '../../../utils/mocks';
import '@testing-library/jest-dom/extend-expect';
import CommitList from '..';

describe('<CommitList />', () => {
  test('renders commits', async () => {
    const getCommits = jest.fn();
    const removeFilter = jest.fn();
    const applyFilter = jest.fn();

    const {queryAllByTestId} = render(
      <CommitList
        commits={commits}
        getCommits={getCommits}
        removeFilter={removeFilter}
        applyFilter={applyFilter}
        filters={[]}
      />
    );

    const rows = queryAllByTestId('commit');
    expect(rows.length).toBe(10);

    rows.forEach((row, i) => {
      expect(row).toHaveTextContent(commits.results[i].author);
      expect(row).toHaveTextContent(commits.results[i].repository);
    });
  });
});
