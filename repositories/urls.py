from django.urls import re_path

from .views import CommitsEndpoint, RepositoryEndpoint

app_name = 'repositories'

urlpatterns = [
    re_path(r'^api/commits/$', CommitsEndpoint.as_view(), name='commits-list'),
    re_path(r'^api/repositories/$', RepositoryEndpoint.as_view(), name='repositories-create'),
]
