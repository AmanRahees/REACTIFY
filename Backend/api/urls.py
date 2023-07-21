from django.urls import path
from .views import *

urlpatterns = [
    path('login/', LoginAPI.as_view(), name='login-api'),
    path('register/', RegisterAPI.as_view(), name='register-api'),

    path('users/', ListUserAPI.as_view(), name='users'),
    path('user/<int:id>/<str:status>/', ChangeUserStatus.as_view(), name='user-status'),
]