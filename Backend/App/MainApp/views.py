from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets

# Create your views here.

from .serializers import MachineSerializer
from .models import Machine

class MachineViewSet(viewsets.ModelViewSet):
    # http_method_names = ('patch', 'get',)
    permission_classes = (IsAuthenticated,)
    serializer_class = MachineSerializer
    
    def get_queryset(self):
        return Machine.objects.all()
    
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)