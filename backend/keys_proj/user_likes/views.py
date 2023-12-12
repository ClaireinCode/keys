from django.shortcuts import render
from users.views import UserPermissions
from .models import User_likes
from .serializers import LikeSerializer
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST,
    HTTP_204_NO_CONTENT,
    HTTP_404_NOT_FOUND
)


# Create your views here.
class All_likes(UserPermissions):
    def get(self, request):
        likes = LikeSerializer(request.user.user_likes.all().order_by('id'), many=True)
        return Response(likes.data)
    
    def post(self, request):
        try:
            data = request.data.copy()
            data["user_id"] = request.user
            print(data)
            new_like = User_likes.objects.create(**data)
            new_like.save()
            ser_list = LikeSerializer(new_like)
            return Response(ser_list.data, status=HTTP_201_CREATED)
        except Exception as e:
            print(e)
            return Response(status=HTTP_400_BAD_REQUEST)
        
class A_like(UserPermissions):
    def get_a_house(self, user, like_id):
        try:
            like = user.user_likes.get(id = like_id)
            return like
        except Exception as e:
            print(e)
            return None
        
    def get(self, request, like_id):
        like = self.get_a_house(request.user, like_id)
        if like:
            return Response("House does not exist", status=HTTP_404_NOT_FOUND)
    
    def put(self, request, like_id):
        like = self.get_a_house(request.user, like_id)
        if like:
            ser_list = LikeSerializer(like, data=request.data, partial=True)
            if ser_list.is_valid():
                ser_list.save()
                return Response(ser_list.data)
            return Response(ser_list.errors, status=HTTP_400_BAD_REQUEST)
        return Response(status=HTTP_404_NOT_FOUND)
    
    def delete(self, request, like_id):
        like = self.get_a_house(request.user, like_id)
        if like:
            like.delete()
            return Response(status=HTTP_204_NO_CONTENT)
        return Response(status=HTTP_404_NOT_FOUND)