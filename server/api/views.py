from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User, Text
from .serializers import UserSerializer, TextSerializer


@api_view(['POST'])
def user_create_view(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def user_login_view(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        print("request",request.data)
        print("username",username)
        print("password",password)
        try:
            user = User.objects.get(username=username, password=password)
        except User.DoesNotExist:
            return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)

@api_view(['POST'])
def user_logout_view(request):
    if request.method == 'POST':
        # Your logout logic here
        return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)

@api_view(['GET'])
def text_view_set(request):
    if request.method == 'GET':
        texts = Text.objects.all().values('id', 'text')
        print(texts)
        serializer = TextSerializer(texts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
