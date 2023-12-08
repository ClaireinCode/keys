from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Users(AbstractUser):
    display_name = models.CharField(max_length=30, unique=True, default="")
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

