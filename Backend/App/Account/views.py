from django.shortcuts import render
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.models import User

# Create your views here.

# @api_view(['POST'])
# def user_login(request):
#     if request.method == 'POST':
#         username = request.data.get('username')
#         password = request.data.get('password')
#         print(request.data)
#         user = None
        
#         try:
#             user = User.objects.get(username = username)
#         except ObjectDoesNotExist:
#             pass
#         if not user:
#             user = authenticate(username = username, password = password)
#         if user:
#             token, _ = Token.objects.get_or_create(user=user)
#             return Response({'token': token.key, 'id': user.users}, status=status.HTTP_200_OK)
        
#         return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def user_logout(request):
#     if request.method == 'POST':
#         try:
#             request.user.auth_token.delete()
#             return Response({'message': 'logged out'}, status=status.HTTP_200_OK)
#         except Exception as e:
#             return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

