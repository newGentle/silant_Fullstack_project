from django.urls import path, include
from .views import *
from rest_framework import routers
from rest_framework.authtoken import views

router = routers.DefaultRouter()
router.register('user', UserViewSet, basename='user-api')

urlpatterns = [
    path('login/', include(router.urls)),
    path('auth-login/', include('rest_framework.urls', namespace='rest_framework')),
    path('auth-token/', views.obtain_auth_token, name='auth-token'),
]
