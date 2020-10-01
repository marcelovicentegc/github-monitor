from django.urls import re_path

from .views import (CommitsByAuthorEndpoint, CommitsByRepoEndpoint,
                    CommitsEndpoint, RepositoriesEndpoint)

app_name = 'repositories'

urlpatterns = [
    re_path(r'^api/commits/$', CommitsEndpoint.as_view(), name='commits-list'),
    re_path(r'^api/repositories/$', RepositoriesEndpoint.as_view(), name='repositories'),
    re_path(r'^api/commits-by-repo/$', CommitsByRepoEndpoint.as_view(), name='commit-by-repo'),
    re_path(r'^api/commits-by-author/$', CommitsByAuthorEndpoint.as_view(), name='commit-by-author')
]
