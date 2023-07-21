from django.urls import path
from .views import *

urlpatterns = [
    path('', home, name='home'),
    path('login/', Login, name='login'),
    path('signup/', Signup, name='signup'),
]