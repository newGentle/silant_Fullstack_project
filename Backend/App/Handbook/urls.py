from django.urls import path, include
from rest_framework import routers
from .views import *

router = routers.SimpleRouter()
router.register(r'modelOfEngine', ModelOfEngineViewSet, basename='modelOfEngine')

urlpatterns = [
    path('api/v1/handbook/', include(router.urls)),
    path('engine/<int:pk>/', ModelOfEngineDetail.as_view(), name='engine'),
    
]