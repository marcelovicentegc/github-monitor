from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.test import Client, RequestFactory, TestCase


class Tests(TestCase):
    def setUp(self):
        self.factory = RequestFactory()

    def test_login_view(self):
        client = Client()
        response = client.get('/login')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'common/login.html')

    def test_unauthenticated_index_view(self):
        client = Client()
        response = client.get('/')
        self.assertEqual(response.status_code, 302)
        self.assertRedirects(
            response,
            '/login?next=/',
            status_code=302,
            target_status_code=200,
            fetch_redirect_response=True)

    def test_unauthenticated_logout_view(self):
        client = Client()
        response = client.get('/logout')
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
        client = Client()
        response = client.get('/login')
        login = client.login(username='john', password='johnpassword')
        self.assertTrue(login)
        response = client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'common/index.html')
