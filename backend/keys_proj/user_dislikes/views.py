from django.shortcuts import render
from users.views import UserPermissions
from .models import User_dislikes
from .serializers import DislikeSerializer
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
class All_dislikes(APIView):
    def get(self, request):
        dislikes = DislikeSerializer(request.user.user_dislikes.all().order_by('id'), many=True)
        return Response(dislikes.data)
    
    def post(self, request):
        try:
            data = request.data.copy()
            data["user_id"] = request.user
            print(data)
            new_dislike = User_dislikes.objects.create(**data)
            new_dislike.save()
            ser_list = DislikeSerializer(new_dislike)
            return Response(ser_list.data, status=HTTP_201_CREATED)
        except Exception as e:
            print(e)
            return Response(status=HTTP_400_BAD_REQUEST)
        
class A_dislike(APIView):
    def get_a_house(self, user, dislike_id):
        try:
            dislike = user.user_dislikes.get(id = dislike_id)
            return dislike
        except Exception as e:
            print(e)
            return None
        
    def get(self, request, dislike_id):
        dislike = self.get_a_house(request.user, dislike_id)
        if dislike:
            return Response("House does not exist", status=HTTP_404_NOT_FOUND)
    
    def put(self, request, dislike_id):
        dislike = self.get_a_house(request.user, dislike_id)
        if dislike:
            ser_list = DislikeSerializer(dislike, data=request.data, partial=True)
            if ser_list.is_valid():
                ser_list.save()
                return Response(ser_list.data)
            return Response(ser_list.errors, status=HTTP_400_BAD_REQUEST)
        return Response(status=HTTP_404_NOT_FOUND)
    
    def delete(self, request, dislike_id):
        dislike = self.get_a_house(request.user, dislike_id)
        if dislike:
            dislike.delete()
            return Response(status=HTTP_204_NO_CONTENT)
        return Response(status=HTTP_404_NOT_FOUND)