from django.shortcuts import render
from django.contrib.auth import authenticate
from .models import Users
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_404_NOT_FOUND,
    HTTP_204_NO_CONTENT,
)
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class Sign_up(APIView):
    def post(self, request):
        request.data["username"] = request.data["email"]
        users = Users.objects.create_user(**request.data)
        token = Token.objects.create(user=users)
        return Response(
            {"user": users.email, "token": token.key}, status=HTTP_201_CREATED
        )
    
class Log_in(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")
        users = authenticate(username=email, password=password)
        if users:
            token, created = Token.objects.get_or_create(user=users)
            return Response({"token": token.key, "user": users.email})
        else:
            return Response("No user matching credentials", status=HTTP_404_NOT_FOUND)

class Info(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"email": request.user.email})  

class Log_out(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
