from django.urls import path, include
from .views import *
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'userInfo', UserViewSet, basename='userInfo')
router.register(r'users', UsersViewSet, basename='users')

urlpatterns = [
    path('', include(router.urls)),
    # path('auth-login/', include('rest_framework.urls', namespace='rest_framework')),
    # path('userinfo/', UserViewSet.as_view({'get': 'list'}), name='userinfo'),
]
