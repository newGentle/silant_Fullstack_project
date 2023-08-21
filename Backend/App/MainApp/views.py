from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from rest_framework import viewsets
from .serializers import MachineSerializer
from .models import Machine, Maintenance, Complaints
from django.views.generic import ListView
from django.shortcuts import render

# Create your views here.

def Main_page(request):
    machs = Machine.objects.all()
    print(request.user.users.get_role_display())
    context = {'content': "Hello world!!!", 'machines': machs}
    
    return render(request, 'main_page.html', context)

class MachinesList(ListView):
    model = Machine
    template_name = 'machines.html'
    context_object_name = 'machines'
    
class MaintinanceList(ListView):
    model = Maintenance
    template_name = ''

class MachineViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = MachineSerializer
    
    def get_queryset(self):
        return Machine.objects.all()
