import requests
from django.contrib.auth.models import User
from social_django.models import UserSocialAuth

class Github:
    """
    Github API integration
    """

    def get_public_data(username):
        response = requests.get('https://api.github.com/users/{}'.format(username))
        reponse.raise_for_status()
        return response.json()
        

    def list_commits(owner, repo):
        user = User.objects.get(username=owner)
        access_token = UserSocialAuth.objects.get(user_id=user.id).extra_data['access_token']
        
        response = requests.get('https://api.github.com/repos/{}/{}/commits'.format(owner, repo), auth=(owner, access_token))
        response.raise_for_status()
        
        return response.json()