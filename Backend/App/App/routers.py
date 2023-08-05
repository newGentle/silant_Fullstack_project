from rest_framework import routers
from MainApp.viewsets import MachineViewSet

router = routers.SimpleRouter()

router.register(r'machine', MachineViewSet, basename='machine')

urlpatterns = [
     *router.urls,
]
