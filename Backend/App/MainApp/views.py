from rest_framework.permissions import DjangoModelPermissions, DjangoModelPermissionsOrAnonReadOnly
from rest_framework import viewsets
from .serializers import MachineSerializer, MaintenanceSerializer, ComplaintsSerializer, DetailedMachineSerilizer
from .models import Machine, Maintenance, Complaints
from django.db.models import Q 

# Create your views here.

class MachineViewSet(viewsets.ModelViewSet):
    permission_classes = (DjangoModelPermissionsOrAnonReadOnly,)
    serializer_class = MachineSerializer
    http_method_names = ('get', 'post')
    
    
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
    permission_classes = (DjangoModelPermissions,)
    serializer_class = MaintenanceSerializer
    http_method_names = ('get', 'post')
    
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
    permission_classes = (DjangoModelPermissions,)
    serializer_class = ComplaintsSerializer
    http_method_names = ('get', 'post')
    
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
 

class DetailMaintenance(viewsets.ModelViewSet):
    permission_classes = (DjangoModelPermissions,)
    http_method_names = ['get',]
    queryset = Machine.objects.all()
    serializer_class = DetailedMachineSerilizer
   

        
    