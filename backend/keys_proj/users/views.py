from django.shortcuts import render
from django.contrib.auth import authenticate
from .models import Users
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_200_OK,
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_204_NO_CONTENT,
)
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class Sign_up(APIView):
    def post(self, request):
        authentication_classes = []
        #Check that an email is being sent
        if not request.data.get("email") or not request.data.get("password"):
            return Response({"error": "Email and password is required"}, status=HTTP_400_BAD_REQUEST)
        #data looks like {username:blah@blah.com, "email":blah@blah.com, 'password':blah, 'display_name': blah}
        request.data["username"] = request.data.get("email") 
        new_user = Users.objects.create_user(**request.data)

        if new_user is not None:
            new_token = Token.objects.create(user=new_user)
            return Response(
                {"user": new_user.display_name, "token": new_token.key}, 
                status=HTTP_201_CREATED
            )
        return Response({"error": "User creation failed"},status=HTTP_400_BAD_REQUEST, )
    
class Log_in(APIView):
    def post(self, request):
        data = request.data.copy()

        #Check that an email and password are sent
        if not data.get("email") or not data.get("password"):
            return Response({"error": "Email and password are required"}, status=HTTP_400_BAD_REQUEST)

        user = authenticate(username = data.get("email"), password = data.get("password"))
        if user is not None:
            token, created = Token.objects.get_or_create(user = user) #returns tuple (token, True/False)
            return Response( {"token": token.key, "user": user.display_name}, status=HTTP_201_CREATED)
        else:
            return Response({"error":"Invalid credentials"},status=HTTP_404_NOT_FOUND)
        
class UserPermissions(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class Info(UserPermissions):
    def get(self, request):
        return Response({ "user": request.user.display_name, "email": request.user.email})  

class Log_out(UserPermissions):
    def post(self, request):
        request.user.auth_token.delete()
        return Response(status=HTTP_204_NO_CONTENT)

