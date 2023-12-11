from django.shortcuts import render
from users.views import UserPermissions
from .models import User_preferences
from .serializers import PreferencesSerializer
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
class All_preferences(APIView):
    def get(self, request):
        preferences = PreferencesSerializer(request.user.user_preferences.all().order_by('id'), many=True)
        return Response(preferences.data)
    
    def post(self, request):
        try:
            data = request.data.copy()
            data["user"] = request.user
            print(data)
            new_dislike = User_preferences.objects.create(**data)
            new_dislike.save()
            ser_list = PreferencesSerializer(new_dislike)
            return Response(ser_list.data, status=HTTP_201_CREATED)
        except Exception as e:
            print(e)
            return Response(status=HTTP_400_BAD_REQUEST)
        
class A_preference(APIView):
    def get_a_house(self, user, preferences_id):
        try:
            preferences = user.user_preferences.get(id = preferences_id)
            return preferences
        except Exception as e:
            print(e)
            return None
        
    def get(self, request, preferences_id):
        preferences = self.get_a_house(request.user, preferences_id)
        if preferences:
            return Response("House does not exist", status=HTTP_404_NOT_FOUND)
    
    def put(self, request, preferences_id):
        preferences = self.get_a_house(request.user, preferences_id)
        if preferences:
            ser_list = PreferencesSerializer(preferences, data=request.data, partial=True)
            if ser_list.is_valid():
                ser_list.save()
                return Response(ser_list.data)
            return Response(ser_list.errors, status=HTTP_400_BAD_REQUEST)
        return Response(status=HTTP_404_NOT_FOUND)
    
    def delete(self, request, preferences_id):
        preferences = self.get_a_house(request.user, preferences_id)
        if preferences:
            preferences.delete()
            return Response(status=HTTP_204_NO_CONTENT)
        return Response(status=HTTP_404_NOT_FOUND)