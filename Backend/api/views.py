from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework.response import Response
from .serializers import *
from rest_framework_simplejwt.tokens import RefreshToken

# Create your views here.

class RegisterAPI(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = CustomUserSerialzers(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                refresh = RefreshToken.for_user(user)
                return Response({'refresh': str(refresh), 'access': str(refresh.access_token)}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class LoginAPI(APIView):
    def post(self, request):
        data = request.data
        serializer = LoginSerializer(data = data)
        if serializer.is_valid():
            username = serializer.data['username']
            password = serializer.data['password']
            user = authenticate(username=username, password=password)
            if user is not None:
                refresh = RefreshToken.for_user(user)
                return Response({'refresh': str(refresh), 'access': str(refresh.access_token)})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class AdminLoginAPI(APIView):
    def post(self, request):
        data = request.data
        serializer = LoginSerializer(data=data)
        if serializer.is_valid():
            username = serializer.data['username']
            password = serializer.data['password']
            user = authenticate(username=username, password=password)
            if user is not None and user.is_superadmin:
                print('yes')

class ListUserAPI(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserListSerializer(users, many=True)
        return Response(serializer.data)
    pass

class ChangeUserStatus(APIView):
    def post(self, request, id, status):
        try:
            user = User.objects.get(id=id)
            if status == 'true':
                user.is_active = True
                user.save()
            else:
                user.is_active = False
                user.save()
            return Response({"message": "User status updated successfully."})
        except:
            return Response({"error": "User not found."}, status=404)