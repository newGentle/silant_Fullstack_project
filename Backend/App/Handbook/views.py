from typing import Any, Dict
from django.shortcuts import render
from django.views.generic import DetailView
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .serializers import *
from .models import *
# Create your views here.

class ModelOfEngineViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = ModelOfEngineSerialiser
    http_method_names = ('get',)
    
    def get_queryset(self):
        return ModelOfEngine.objects.all()


class ModelOfTransmissionViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = ModelOfTransmissionSerialiser
    http_method_names = ('get',)
    
    def get_queryset(self):
        return ModelOfTransmission.objects.all()


class ModelOfMainAxleViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = ModelOfMainAxleSerialiser
    http_method_names = ('get',)
    
    def get_queryset(self):
        return ModelOfMainAxle.objects.all()


class ModelOfSteeringAxleViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = ModelOfSteeringAxleSerialiser
    http_method_names = ('get',)
    
    def get_queryset(self):
        return ModelOfSteeringAxle.objects.all()
    
