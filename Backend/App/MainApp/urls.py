from django.urls import path, include
from rest_framework import routers
from .views import MachinesList, MachineViewSet, OrderViewSet, MaintenanceViewSet, ComplaintsViewSet

router = routers.SimpleRouter()
router.register(r'machine', MachineViewSet, basename='machine')
router.register(r'order', OrderViewSet, basename='order')
router.register(r'maintenance', MaintenanceViewSet, basename='maintenance')
router.register(r'complaints', ComplaintsViewSet, basename='complaints')

urlpatterns = [
    # path('', MachinesList.as_view(), name='main_page'),
    # path('machines/', MachinesList.as_view(), name='machines_list'),
    path('api/v1/', include(router.urls))
]

