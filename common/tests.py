from django.contrib.auth import authenticate, get_user
from django.contrib.auth.models import User
from django.test import Client, RequestFactory, TestCase


class Tests(TestCase):
    def setUp(self):
        self.factory = RequestFactory()
        self.client = Client()

    def test_login_view(self):
        response = self.client.get('/login')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'common/login.html')

    def test_unauthenticated_index_view(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 302)
        self.assertRedirects(
            response,
            '/login?next=/',
            status_code=302,
            target_status_code=200,
            fetch_redirect_response=True)

    def test_unauthenticated_logout_view(self):
        response = self.client.get('/logout')
        self.assertEqual(response.status_code, 302)
        self.assertRedirects(
            response,
            '/login',
            status_code=302,
            target_status_code=200,
            fetch_redirect_response=True)

    def test_authenticated_index_view(self):
        user = User.objects.create_user(
            'john',
            'lennon@thebeatles.com',
            'johnpassword',
            is_active=True,
            is_staff=True,
            is_superuser=True)
        user.save()
        user = authenticate(username='john', password='johnpassword')
        response = self.client.get('/login')
        login = self.client.login(username='john', password='johnpassword')
        self.assertTrue(login)
        user = get_user(self.client)
        self.assertEqual(user.is_authenticated, True)
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'common/index.html')

    def test_logout_view(self):
        user = User.objects.create_user(
            'john',
            'lennon@thebeatles.com',
            'johnpassword',
            is_active=True,
            is_staff=True,
            is_superuser=True)
        user.save()
        user = authenticate(username='john', password='johnpassword')
        response = self.client.get('/login')
        self.client.login(username='john', password='johnpassword')
        user = get_user(self.client)
        self.assertEqual(user.is_authenticated, True)
        response = self.client.get('/logout')
        self.assertEqual(response.status_code, 302)
        self.assertRedirects(
            response,
            '/login',
            status_code=302,
            target_status_code=200,
            fetch_redirect_response=True)
        user = get_user(self.client)
        self.assertEqual(user.is_authenticated, False)
