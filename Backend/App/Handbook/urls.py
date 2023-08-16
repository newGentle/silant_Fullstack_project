from django.urls import path, include
from rest_framework import routers
from .views import ModelOfEngineViewSet

router = routers.SimpleRouter()
router.register(r'modelOfEngine', ModelOfEngineViewSet, basename='modelOfEngine')

urlpatterns = [
    path('handbook/', include(router.urls))
]