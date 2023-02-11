from .views import UserPost
from django.urls import path


urlpatterns = [
    path('userpost/', UserPost.as_view(), name='userPost'),
]
