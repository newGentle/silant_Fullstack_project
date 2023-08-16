from django.urls import path, include
from rest_framework import routers
from .views import MachinesList, MachineViewSet, Main_page

router = routers.SimpleRouter()
router.register(r'machine', MachineViewSet, basename='machine')

urlpatterns = [
    # path('', Main_page, name='main_page'),
    # path('machines/', MachinesList.as_view(), name='machines_list'),
    path('machines/', include(router.urls))
]

