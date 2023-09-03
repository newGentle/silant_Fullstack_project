from django.urls import path, include
from rest_framework import routers
from .views import *

router = routers.SimpleRouter()
router.register(r'modelOfEngine', ModelOfEngineViewSet, basename='modelOfEngine')
router.register(r'modelOfTransmission', ModelOfTransmissionViewSet, basename='modelOfTransmission')
router.register(r'modelOfMainAxle', ModelOfMainAxleViewSet, basename='modelOfMainAxle')
router.register(r'modelOfSteeringAxle', ModelOfSteeringAxleViewSet, basename='modelOfSteeringAxle')
router.register(r'typeOfMaintenance', TypeofMaintenanceViewSet, basename='typeOfMaintenance')
router.register(r'typeOfFailure', TypeOfFailureViewSet, basename='typeOfFailure')
router.register(r'methofOfRecovery', MethodOfRecoveryViewSet, basename='methodOfRecovery')

urlpatterns = [
    path('', include(router.urls)),    
]