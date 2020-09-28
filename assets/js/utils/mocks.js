export const commits = {
  count: 20,
  current_page: 1,
  total_pages: 2,
  next: 'http://fake.api/api/commits/?page=2&repository__name=github-monitor',
  previous: null,
  results: [
    {
      message: 'feat(repositories): save last 30 days commits per repo',
      sha: 'bc20d645ed1956b6c5bf0013949c5810cd190a1d',
      author: 'Marcelo Cardoso',
      url:
        'https://api.github.com/repos/marcelovicentegc/github-monitor/git/commits/b58974d97ac2d0b19419022dc5ceaf7b17679a03',
      avatar: 'https://avatars2.githubusercontent.com/u/33183880?v=4',
      date: '2020-09-26T18:18:46-03:00',
      repository: 'github-monitor',
    },
    {
      message: 'feat: let list commits method accept multiple params',
      sha: 'b2854d520e02778be927244a3a171453a84f9a11',
      author: 'Marcelo Cardoso',
      url:
        'https://api.github.com/repos/marcelovicentegc/github-monitor/git/commits/8f41b443892322aec3becc8cad3d0834c30defa2',
      avatar: 'https://avatars2.githubusercontent.com/u/33183880?v=4',
      date: '2020-09-26T16:31:53-03:00',
      repository: 'github-monitor',
    },
    {
      message: 'chore(devtools): add pre-commit and prospector as dev deps',
      sha: '18b129d8671da15b234d435d8c2ad5b0e67c8653',
      author: 'Marcelo Cardoso',
      url:
        'https://api.github.com/repos/marcelovicentegc/github-monitor/git/commits/7b49f61e9e317ebd5e32739decbc9e93d6a8f22f',
      avatar: 'https://avatars2.githubusercontent.com/u/33183880?v=4',
      date: '2020-09-26T15:51:18-03:00',
      repository: 'github-monitor',
    },
    {
      message: 'chore(react): add pretty loader',
      sha: '235f38cb82d3b3d879dbc3fd38e951b97c917ea8',
      author: 'Marcelo Cardoso',
      url:
        'https://api.github.com/repos/marcelovicentegc/github-monitor/git/commits/6db68d98683d84ad7be2a67eec67698defd8a2e4',
      avatar: 'https://avatars2.githubusercontent.com/u/33183880?v=4',
      date: '2020-09-25T22:41:32-03:00',
      repository: 'github-monitor',
    },
    {
      message: 'feat: error message handling',
      sha: 'c0512a83e4d11a77671cbab8d437c31ad43a1651',
      author: 'Marcelo Cardoso',
      url:
        'https://api.github.com/repos/marcelovicentegc/github-monitor/git/commits/c7b8c89381f85cf19e88a5406823dafaf8431371',
      avatar: 'https://avatars2.githubusercontent.com/u/33183880?v=4',
      date: '2020-09-25T22:32:31-03:00',
      repository: 'github-monitor',
    },
    {
      message: 'fix(repositories): repo read serializer',
      sha: '2757a1cdccb55a0afd1fa418f6c657386bcc638f',
      author: 'Marcelo Cardoso',
      url:
        'https://api.github.com/repos/marcelovicentegc/github-monitor/git/commits/289e5cf89ebfd2846639d394f28206018be5dfed',
      avatar: 'https://avatars2.githubusercontent.com/u/33183880?v=4',
      date: '2020-09-25T22:21:36-03:00',
      repository: 'github-monitor',
    },
    {
      message: 'feat(frontend): add useApi hook and pagination navigation',
      sha: 'eaf7c509739b52069c84c4fa8f3e91ca5b1b0f9e',
      author: 'Marcelo Cardoso',
      url:
        'https://api.github.com/repos/marcelovicentegc/github-monitor/git/commits/18ee0221553ed82c6c828b5868dd78512f252af9',
      avatar: 'https://avatars2.githubusercontent.com/u/33183880?v=4',
      date: '2020-09-24T23:05:41-03:00',
      repository: 'github-monitor',
    },
    {
      message: 'chore(frontend): add pagination structure',
      sha: 'cc93927318e8f543f456395c490da6336518f90e',
      author: 'Marcelo Cardoso',
      url:
        'https://api.github.com/repos/marcelovicentegc/github-monitor/git/commits/d3d6b61f3a134a171f5487c764d4361b801cf149',
      avatar: 'https://avatars2.githubusercontent.com/u/33183880?v=4',
      date: '2020-09-24T21:51:31-03:00',
      repository: 'github-monitor',
    },
    {
      message:
        "fix: don't assign obj enumerable props to a value on the store\n\n1. This also fixes the rendering issue, which was caused by the\nincorrect mapping accross the commit obj props",
      sha: '3ef7923c88b658d249ead257320ba1994ff0232a',
      author: 'Marcelo Cardoso',
      url:
        'https://api.github.com/repos/marcelovicentegc/github-monitor/git/commits/88087c36e94fade73d8347002a32b6133c40a99f',
      avatar: 'https://avatars2.githubusercontent.com/u/33183880?v=4',
      date: '2020-09-24T21:26:10-03:00',
      repository: 'github-monitor',
    },
    {
      message: 'feat(backend): add pagination util',
      sha: '3eb47323aadffa0a4c8213573c9605b981947498',
      author: 'Marcelo Cardoso',
      url:
        'https://api.github.com/repos/marcelovicentegc/github-monitor/git/commits/46c4f35b161e31ef3a5baec004b2a9736211fb0f',
      avatar: 'https://avatars2.githubusercontent.com/u/33183880?v=4',
      date: '2020-09-24T21:05:38-03:00',
      repository: 'github-monitor',
    },
  ],
};

export const repos = [
  {name: 'github-monitor'},
  {name: 'django-react-typescript'},
  {name: 'fullstack-typescript'},
  {name: 'react-typescript-client'},
  {name: 'orangino'},
  {name: 'george'},
];
