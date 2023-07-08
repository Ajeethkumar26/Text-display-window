
from rest_framework import serializers
from .models import User, Text

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')

class TextSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text
        fields = ('id', 'text')
