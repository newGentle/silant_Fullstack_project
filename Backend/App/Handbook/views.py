from typing import Any, Dict
from django.shortcuts import render
from django.views.generic import DetailView
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
    
class ModelOfEngineDetail(DetailView):
    model = ModelOfEngine
    template_name = 'detail.html'
    context_object_name = 'item'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['type'] = 'Engine'
        return context