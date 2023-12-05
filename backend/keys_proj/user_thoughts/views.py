from django.shortcuts import render
from .models import User_thoughts
from .serializers import ThoughtSerializer
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK


# Create your views here.
class All_thoughts(APIView):
    def get(self, request):
        thoughts = ThoughtSerializer(User_thoughts.objects.order_by('id'), many=True)
        return Response(thoughts.data)