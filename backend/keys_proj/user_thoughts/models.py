from django.db import models
from users.models import Users
from django.utils import timezone
# Create your models here.

class User_thoughts(models.Model):
    user_id = models.ForeignKey(Users, related_name='user_thoughts', on_delete=models.CASCADE)
    thoughts = models.TextField(blank=False)
    date = models.DateTimeField(default=timezone.now)
    house_id = models.IntegerField(blank=False, null=False, default=0)


