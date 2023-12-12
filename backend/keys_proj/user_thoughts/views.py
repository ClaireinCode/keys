from django.shortcuts import render
from .models import User_thoughts
from users.models import Users
from .serializers import ThoughtSerializer
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import ( 
    HTTP_200_OK,
    HTTP_201_CREATED,
    HTTP_404_NOT_FOUND,
    HTTP_400_BAD_REQUEST,
    HTTP_204_NO_CONTENT
    ) 
from users.views import UserPermissions


# Create your views here.
class All_thoughts(UserPermissions):
    def get(self, request, user_id):
        all_thoughts = request.user.user_thoughts.get(id=user_id)
        if not all_thoughts:
            return Response({"message": "No thoughts available for this house"}, status=HTTP_200_OK)
        return Response(ThoughtSerializer(all_thoughts, many=True).data)
    
    def post(self, request):
        data = request.data.copy()
        user_instance = request.user
        data['user_id'] = user_instance
        new_thought = User_thoughts.objects.create(**data)
        new_thought.save()
        return Response((ThoughtSerializer(new_thought).data), status=HTTP_201_CREATED)
    


class A_thought(UserPermissions):
    def get_a_thought(self, user,thought_id):
        try:
            thought = user.user_thoughts.get(id = thought_id)
            return thought
        except Exception as e:
            print(e)
            return None
        
    def get(self, request, thought_id):
        thought = self.get_a_thought(request.user, thought_id)
        if thought:
            return Response(ThoughtSerializer(thought).data)
        return Response("OBJECT DOES NOT EXIST", status=HTTP_404_NOT_FOUND)

    def put(self, request, thought_id):
        thought = self.get_a_thought(request.user, thought_id)
        if thought:
            ser_thought = ThoughtSerializer(thought, data=request.data, partial = True)
            if ser_thought.is_valid():
                ser_thought.save()
                return Response(ser_thought.data)
            return Response(ser_thought.errors, status=HTTP_400_BAD_REQUEST)
        return Response("OBJECT DOES NOT EXIST", status=HTTP_404_NOT_FOUND)

    def delete(self, request, thought_id):
        thought = self.get_a_thought(request.user, thought_id)
        if thought:
            list.delete()
            return Response(status=HTTP_204_NO_CONTENT)
        return Response("OBJECT DOES NOT EXIST", status=HTTP_404_NOT_FOUND)
    
class Thoughts_by_house(UserPermissions):
    def get(self, request, house_id):
        house_thoughts = User_thoughts.objects.filter(house_id=house_id)
        if not house_thoughts:
            return Response({"message": "No thoughts available for this house"}, status=HTTP_200_OK)
        
        serialized_data = []

        for each_thought in house_thoughts:
            thought_data = ThoughtSerializer(each_thought).data
            thought_data['username'] = each_thought.user_id.display_name
            serialized_data.append(thought_data)

        return Response(serialized_data, status=HTTP_200_OK)
