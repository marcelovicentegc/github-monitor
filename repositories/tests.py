from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework import status
from rest_framework.test import (APIRequestFactory, APITestCase,
                                 force_authenticate)

from .models import Repository
from .views import RepositoriesEndpoint


class RepositoriesTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            'john',
            'lennon@thebeatles.com',
            'johnpassword',
            is_active=True,
            is_staff=True,
            is_superuser=True)
        self.user.save()

    def test_unauthenticated_get_commits(self):
        response = self.client.get(reverse('repositories:commits-list'))
        self.assertEqual(response.status_code, 403)

    def test_unauthenticated_get_repos(self):
        response = self.client.get(reverse('repositories:repositories'))
        self.assertEqual(response.status_code, 403)

    def test_authenticated_get_repos(self):
        factory = APIRequestFactory()
        view = RepositoriesEndpoint.as_view()

        Repository.objects.bulk_create(
            [
                Repository(name='github-monitor'),
                Repository(name='django-react-typescript'),
                Repository(name='fullstack-typescript'),
                Repository(name='george'),
                Repository(name='react-typescript-client')
            ]
        )

        request = factory.get(reverse('repositories:repositories'))
        force_authenticate(request, user=self.user)
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 5)
