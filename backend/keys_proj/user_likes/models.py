from django.db import models
from users.models import Users
from django.utils import timezone
# Create your models here.

class User_likes(models.Model):
    user_id = models.ForeignKey(Users, related_name='user_id')
    user_houses = models.PositiveIntegerField(blank=True, null=True)