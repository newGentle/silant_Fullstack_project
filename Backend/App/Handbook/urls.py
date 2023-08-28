from django.urls import path, include
from rest_framework import routers
from .views import *

router = routers.SimpleRouter()
router.register(r'modelOfEngine', ModelOfEngineViewSet, basename='modelOfEngine')
router.register(r'modelOfTransmission', ModelOfTransmissionViewSet, basename='modelOfTransmission')
router.register(r'modelOfMainAxle', ModelOfMainAxleViewSet, basename='modelOfMainAxle')
router.register(r'modelOfSteeringAxle', ModelOfSteeringAxleViewSet, basename='modelOfSteeringAxle')

urlpatterns = [
    path('', include(router.urls)),    
]