from rest_framework import serializers # import serializers from DRF
from .models import User_likes 

class LikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = User_likes # specify what model this serializer is for
        fields = "__all__" # specify the fields you would like this serializer to return