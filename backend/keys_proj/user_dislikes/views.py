from django.shortcuts import render
from .models import User_dislikes
from .serializers import DislikeSerializer
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK


# Create your views here.
class All_dislikes(APIView):
    def get(self, request):
        dislikes = DislikeSerializer(User_dislikes.objects.order_by('id'), many=True)
        return Response(dislikes.data)