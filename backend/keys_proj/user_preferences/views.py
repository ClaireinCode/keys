from django.shortcuts import render
from .models import User_preferences
from .serializers import PreferencesSerializer
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK


# Create your views here.
class All_preferences(APIView):
    def get(self, request):
        preferences = PreferencesSerializer(User_preferences.objects.order_by('id'), many=True)
        return Response(preferences.data, status=HTTP_200_OK)
