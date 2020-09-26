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

        params = []

        for kw in kwargs:
            params.append('&{}={}'.format(kw, kwargs[kw]))

        response = requests.get(
            'https://api.github.com/repos/{}/{}/commits?{}'
            .format(
                owner,
                repo,
                ''.join(params)[1:]
            ),
            auth=(owner, access_token)
        )
        response.raise_for_status()

        return response.json()
