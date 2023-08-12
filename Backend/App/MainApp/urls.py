from django.urls import path, include
from rest_framework import routers
from .views import MachinesList, MachineViewSet, Main_page

router = routers.SimpleRouter()
router.register(r'machine', MachineViewSet, basename='machine')

urlpatterns = [
    path('main_page/', Main_page, name='main_page'),
    path('', MachinesList.as_view(), name='machines_list'),
    path('api/v1/', include(router.urls))
]

