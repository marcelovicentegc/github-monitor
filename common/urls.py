from django.contrib.auth.views import LogoutView
from django.urls import re_path

from .views import HomeView, LoginView

app_name = 'common'

urlpatterns = [
    re_path(r'^$|^commits-by-repo/$|^commits-by-author$', HomeView.as_view(), name='home'),
    re_path(r'^login/$', LoginView.as_view(), name='login'),
    re_path(r'^logout/$', LogoutView.as_view(), name='logout'),
]
