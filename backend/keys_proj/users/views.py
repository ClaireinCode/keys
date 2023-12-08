from django.shortcuts import render
from django.contrib.auth import authenticate
from .models import Users
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_204_NO_CONTENT,
)
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class Sign_up(APIView):
    def post(self, request):
        request.data["username"] = request.data.get("email")
        #data looks like {username:blah@blah.com, "email":blah@blah.com, 'password':blah, 'display_name': blah}
        new_user = Users.objects.create_user(**request.data)
        if new_user is not None:
            new_token = Token.objects.create(user=new_user)
            return Response(
                {"token": new_token.key, "user": new_user.display_name}, status=HTTP_201_CREATED
            )
        return Response(HTTP_400_BAD_REQUEST)
    
class Log_in(APIView):
    def post(self, request):
        data = request.data.copy()
        user = authenticate(username = data.get("email"), password = data.get("password"))
        if user is not None:
            token, created = Token.objects.get_or_create(user = user) #returns tuple (token, True/False)
            return Response( {"token": token.key, "user": user.display_name}, status=HTTP_201_CREATED)
        else:
            return Response(HTTP_404_NOT_FOUND)
        # email = request.data.get("email")
        # password = request.data.get("password")
        # users = authenticate(username=email, password=password)
        # if users:
        #     token, created = Token.objects.get_or_create(user=users)
        #     return Response({"token": token.key, "user": users.email})
        # else:
        #     return Response("No user matching credentials", status=HTTP_404_NOT_FOUND)

class Info(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"email": request.user.email, "user": request.user.display_name})  

class Log_out(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    def post(self, request):
        request.user.auth_token.delete()
        return Response(status=HTTP_204_NO_CONTENT)

