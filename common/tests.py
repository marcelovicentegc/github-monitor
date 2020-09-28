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
