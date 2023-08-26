from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import viewsets
from .serializers import MachineSerializer, OrderSerializer
from .models import Machine, Maintenance, Complaints, Order
from django.views.generic import ListView
from django.db.models import Q 

# Create your views here.

class MachinesList(ListView):
    model = Machine
    template_name = 'main_page.html'
    context_object_name = 'machines'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        user = self.request.user
        
        if user.is_anonymous:
            return context
                   
        if user.is_superuser or user.users.role == 'MR':
            context['machines'] = Machine.objects.all()
            context['maintenances'] = Maintenance.objects.all()
            context['complaints'] = Complaints.objects.all()
            return context

        if user.users.role == 'CR':
            order = Order.objects.filter(client = user).values_list('machine', flat=True)
            machines = Machine.objects.filter(factoryNumberOfMachine__in = order)
            maintenance = Maintenance.objects.filter(machine__in = order)
            complaints = Complaints.objects.filter(machine__in = order)
            context['machines'] = machines
            context['maintenances'] = maintenance
            context['complaints'] = complaints
            return context
        
        if user.users.role == 'SC':
            maintenanceOfMachines = Maintenance.objects.filter(Q(serviceCompany = user) | Q(maintenanceServiceCompany = user)).values_list('machine_id', flat=True)
            maintenance = Maintenance.objects.filter(Q(serviceCompany = user) | Q(maintenanceServiceCompany = user))
            order = Order.objects.filter(serviceCompany = user)
            machines = Machine.objects.filter(factoryNumberOfMachine__in = maintenanceOfMachines)
            complaints = Complaints.objects.filter(machine__in = machines)
            context['maintenances'] = maintenance
            context['machines'] = machines
            context['complaints'] = complaints
            return context
        

class OrderViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = OrderSerializer
    http_method_names = ('get',)
    
    def get_queryset(self):
        user = self.request.user
            
        if user.is_superuser or user.users.role == 'MR':
            return Order.objects.all()
 
        
class MachineViewSet(viewsets.ModelViewSet):
    serializer_class = MachineSerializer
    queryset = Machine.objects.all()
    http_method_names = ('get',)
    
    