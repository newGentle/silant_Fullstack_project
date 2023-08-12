from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from .serializers import MachineSerializer
from .models import Machine
from django.views.generic import ListView
from django.shortcuts import render

# Create your views here.

def Main_page(request):
    context = {'content': "Hello world!!!"}
    return render(request, 'main_page.html', context)

class MachinesList(ListView):
    model = Machine
    template_name = 'machines.html'
    context_object_name = 'machines'

class MachineViewSet(viewsets.ModelViewSet):
    # http_method_names = ('patch', 'get',)
    permission_classes = (IsAuthenticated,)
    serializer_class = MachineSerializer
    
    def get_queryset(self):
        return Machine.objects.all()
    
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)