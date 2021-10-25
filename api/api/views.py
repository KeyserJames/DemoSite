from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from .models import InputModel
from .serializers import InputSerializer
# Create your views here.

class InputTextAll(generics.ListCreateAPIView):
    queryset = InputModel.objects.all()
    serializer_class = InputSerializer


class InputTextSingle(generics.RetrieveUpdateDestroyAPIView):
    queryset = InputModel.objects.all()
    serializer_class = InputSerializer