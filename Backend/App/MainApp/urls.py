from django.urls import path, include
from rest_framework import routers
from .views import MachineViewSet

router = routers.SimpleRouter()
router.register(r'machine', MachineViewSet, basename='machine')

urlpatterns = [
    path('api/v1/', include(router.urls))
]

