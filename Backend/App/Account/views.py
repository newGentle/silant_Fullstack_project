# from rest_framework import viewsets
# from rest_framework.permissions import IsAuthenticated
# from .serializers import UsersSerializer, UserSerializer
# from .models import Users, User

# # Create your views here.

# class UserViewSet(viewsets.ModelViewSet):
#     http_method_names = ('get',)
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     permission_classes = [IsAuthenticated, ]

#     def get_queryset(self):
#         return super().get_queryset()