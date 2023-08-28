from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer
from .models import User

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    http_method_names = ('get',)
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated, ]

    def get_queryset(self):
        
        user = User.objects.filter(pk = self.request.user.pk)
        return user