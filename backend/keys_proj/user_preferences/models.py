from django.db import models
from users.models import Users
from django.utils import timezone
# Create your models here.

class Bedrooms(models.TextChoices):
    one = 1, 'one bedroom'
    two = 2, 'two bedrooms'
    three = 3, 'three bedrooms'
    four = 4, 'four bedrooms'
    five = 5, 'five bedrooms'
    six = 6, 'six bedrooms'

class Bathrooms(models.TextChoices):
    one = 1, 'one bedroom'
    two = 2, 'two bedrooms'
    three = 3, 'three bedrooms'
    four = 4, 'four bedrooms'
    five = 5, 'five bedrooms'
    six = 6, 'six bedrooms'

class Neighborhood(models.TextChoices):
    pass

class Laundry(models.TextChoices):
    pass

class Cooling(models.TextChoices):
    pass

class Heating(models.TextChoices):
    pass

class Floors(models.TextChoices):
    pass

class Parking(models.TextChoices):
    pass


class User_preferences(models.Model):
    user_id = models.ForeignKey(Users, related_name='user_id')
    home_type = models.CharField()
    bedrooms = models.CharField(blank=True, null=True, max_length=1, choices=Bedrooms.choices)
    bathrooms = models.CharField(blank=True, null=True, max_length=1, choices=Bathrooms.choices)
    neighborhood = models.CharField(blank=True, null=True, choices=Neighborhood.choices)
    laundry = models.CharField(blank=True, null=True, choices=Laundry.choices)
    cooling = models.CharField(blank=True, null=True, choices=Cooling.choices)
    heating = models.CharField(blank=True, null=True, choices=Heating.choices)
    living_area = models.PositiveIntegerField(blank=True, null=True)
    lot_area = models.PositiveIntegerField(blank=True, null=True)
    age = models.PositiveIntegerField(blank=True, null=True)
    price_min = models.PositiveIntegerField(blank=True, null=True)
    price_max = models.PositiveIntegerField(blank=True, null=True)
    hoa_max = models.PositiveIntegerField(blank=True, null=True)
    hoa_min = models.PositiveIntegerField(blank=True, null=True)
    dishwasher = models.BooleanField(blank=True, null=True)
    floors = models.CharField(blank=True, null=True, choices=Floors.choices)
    parking = models.CharField(blank=True, null=True, choices=Parking.choices)