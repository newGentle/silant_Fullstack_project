from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from rest_framework import viewsets
from .serializers import MachineSerializer, MaintenanceSerializer, ComplaintsSerializer, DetailedMachineSerilizer
from .models import Machine, Maintenance, Complaints
from django.views.generic import ListView
from django.db.models import Q 

from rest_framework.response import Response

# Create your views here.

# class MachinesList(ListView):
#     model = Machine
#     template_name = 'main_page.html'
#     context_object_name = 'machines'
    
#     def get_context_data(self, **kwargs):
#         context = super().get_context_data(**kwargs)
#         user = self.request.user
        
#         if user.is_anonymous:
#             return context
                   
#         if user.is_superuser or user.users.role == 'MR':
#             context['machines'] = Machine.objects.all()
#             context['maintenances'] = Maintenance.objects.all()
#             context['complaints'] = Complaints.objects.all()
#             return context

#         if user.users.role == 'CR':
#             machines = Machine.objects.filter(client = user)
#             maintenance = Maintenance.objects.filter(machine__in = machines)
#             complaints = Complaints.objects.filter(machine__in = machines)
#             context['machines'] = machines
#             context['maintenances'] = maintenance
#             context['complaints'] = complaints
#             return context
        
#         if user.users.role == 'SC':
#             maintenanceOfMachines = Maintenance.objects.filter(Q(serviceCompany = user) | Q(maintenanceServiceCompany = user)).values_list('machine_id', flat=True)
#             maintenance = Maintenance.objects.filter(Q(serviceCompany = user) | Q(maintenanceServiceCompany = user))
#             order = Order.objects.filter(serviceCompany = user)
#             machines = Machine.objects.filter(factoryNumberOfMachine__in = maintenanceOfMachines)
#             complaints = Complaints.objects.filter(machine__in = machines)
#             context['maintenances'] = maintenance
#             context['machines'] = machines
#             context['complaints'] = complaints
#             return context
        

class MachineViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = MachineSerializer
    http_method_names = ('get', 'put')
    
    
    def get_queryset(self):
        user = self.request.user
        
        if user.is_anonymous:
            return Machine.objects.all()
        
        if user.is_superuser or user.users.role == 'MR':
            return Machine.objects.all()
        
        if user.users.role == 'CR':
            return Machine.objects.filter(client = user)
        
        if user.users.role == 'SC':
            return Machine.objects.filter(serviceCompany = user)


class MaintenanceViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = MaintenanceSerializer
    http_method_names = ('get', 'put')
    
    def get_queryset(self):
        user = self.request.user
        
        if user.is_anonymous:
            return ''
             
        if user.is_superuser or user.users.role == 'MR':
            return Maintenance.objects.all()
        
        if user.users.role == 'CR':
            machine = Machine.objects.filter(client = user)
            return Maintenance.objects.filter(machine__in = machine)
        
        if user.users.role == 'SC':
            return Maintenance.objects.filter(Q(serviceCompany = user) | Q(maintenanceServiceCompany = user))


class ComplaintsViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = ComplaintsSerializer
    http_method_names = ('get', 'put')
    
    def get_queryset(self):
        user = self.request.user
        
        if user.is_anonymous:
            return ''
             
        if user.is_superuser or user.users.role == 'MR':
            return Complaints.objects.all()
        
        if user.users.role == 'CR':
            machine = Machine.objects.filter(client = user)
            return Complaints.objects.filter(machine__in = machine)
        
        if user.users.role == 'SC':
            maintenanceOfMachines = Maintenance.objects.filter(Q(serviceCompany = user) | Q(maintenanceServiceCompany = user)).values_list('machine_id', flat=True)
            machine = Machine.objects.filter(serviceCompany = user)
            machines = Machine.objects.filter(factoryNumberOfMachine__in = maintenanceOfMachines)
            return Complaints.objects.filter(machine__in = machines)
 
        
# class MachineViewSet(viewsets.ModelViewSet):
#     permission_classes = (IsAuthenticatedOrReadOnly,)
#     serializer_class = MachineSerializer
#     queryset = Machine.objects.all()
#     http_method_names = ('get',)
    


class DetailMaintenance(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Machine.objects.all()
    serializer_class = DetailedMachineSerilizer
   
        
    