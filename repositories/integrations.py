import requests
from django.contrib.auth.models import User
from social_django.models import UserSocialAuth


class Github:
    """
    Github API integration
    """

    @staticmethod
    def get_public_data(username):
        response = requests.get('https://api.github.com/users/{}'.format(username))
        response.raise_for_status()
        return response.json()

    @staticmethod
    def list_commits(owner, repo, **kwargs):
        user = User.objects.get(username=owner)
        access_token = UserSocialAuth.objects.get(user_id=user.id).extra_data['access_token']

        response = requests.get(
            'https://api.github.com/repos/{}/{}/commits?sha={}&path={}&author={}&since={}&until={}'
            .format(
                owner,
                repo,
                kwargs['sha'],
                kwargs['path'],
                kwargs['author'],
                kwargs['since'],
                kwargs['until']
            ),
            auth=(owner, access_token)
        )
        response.raise_for_status()

        return response.json()
