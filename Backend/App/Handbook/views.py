from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers import ModelOfEngineSerialiser
from .models import *
# Create your views here.

class ModelOfEngineViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = ModelOfEngineSerialiser
    
    def get_queryset(self):
        return ModelOfEngine.objects.all()