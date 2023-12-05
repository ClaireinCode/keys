from django.shortcuts import render
from .models import User_likes
from .serializers import LikeSerializer
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK


# Create your views here.
class All_likes(APIView):
    def get(self, request):
        likes = LikeSerializer(User_likes.objects.order_by('id'), many=True)
        return Response(likes.data)