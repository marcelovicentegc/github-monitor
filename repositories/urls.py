from django.urls import re_path

from .views import CommitsEndpoint, RepositoriesEndpoint

app_name = 'repositories'

urlpatterns = [
    re_path(r'^api/commits/$', CommitsEndpoint.as_view(), name='commits-list'),
    re_path(r'^api/repositories/$', RepositoriesEndpoint.as_view(), name='repositories'),
]
