# from rest_framework import serializers
# from .models import User, Users

# class UsersSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Users
#         fields = ['role',]

# class UserSerializer(serializers.ModelSerializer):
#     usersInfo = UsersSerializer(read_only = True)
#     class Meta:
#         model = User
#         fields = ['id', 'username', 'first_name', 'usersInfo']