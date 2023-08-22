from django.urls import path, include
from rest_framework import routers
from .views import MachinesList, MachineViewSet

router = routers.SimpleRouter()
router.register(r'machine', MachineViewSet, basename='machine')

urlpatterns = [
    path('', MachinesList.as_view(), name='main_page'),
    # path('machines/', MachinesList.as_view(), name='machines_list'),
    path('api/v1/', include(router.urls))
]

