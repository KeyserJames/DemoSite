from rest_framework import serializers
from .models import InputModel

class InputSerializer(serializers.ModelSerializer):
    class Meta:
        model = InputModel
        fields = ('inputText',)