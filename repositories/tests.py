from django.urls import reverse
from rest_framework.test import APITestCase


class RepositoriesTests(APITestCase):
    def test_unauthenticated_get_commits(self):
        response = self.client.get(reverse('repositories:commits-list'))
        self.assertEqual(response.status_code, 403)

    def test_unauthenticated_get_repos(self):
        response = self.client.get(reverse('repositories:repositories'))
        self.assertEqual(response.status_code, 403)
