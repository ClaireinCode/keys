from django.db import models
from users.models import Users
from django.utils import timezone
# Create your models here.

class Bedrooms(models.TextChoices):
    studio = 0, 'studio'
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

class Interests(models.TextChoices):
    shopping = 'shopping', 'Shopping'
    restaurants = 'restaurants', 'Restaurants'
    supermarkets = 'supermarkets', 'Supermarkets'
    trails = 'trails', 'Trails'
    public_transit = 'public_transit', 'Public Transit'
    theatre = 'theatre', 'Theatre'
    night_life = 'night_life', 'Night Life'
    marijuana_dispensary = 'marijuana_dispensary', 'Marijuana Dispensary'
    cafes = 'cafes', 'Cafes'
    sports = 'sports', 'Sports'
    

class Laundry(models.TextChoices):
    in_unit = 'in_unit', 'In-Unit Laundry'
    on_site = 'on_site', 'On-Site Laundry'
    common_area = 'common_area', 'Common Area Laundry'
    none = 'none', 'None'
    hookups_only = 'hookups_only', 'Hookups Only'
    coin_operated = 'coin_operated', 'Coin-Operated Laundry'
    laundry_room = 'laundry_room', 'Laundry Room'
    shared_laundry = 'shared_laundry', 'Shared Laundry'

class Cooling(models.TextChoices):
    central_air = 'central_air', 'Central Air Conditioning'
    window_units = 'window_units', 'Window Units'
    split_system = 'split_system', 'Split System'
    evaporative_cooling = 'evaporative_cooling', 'Evaporative Cooling'
    ductless_mini_split = 'ductless_mini_split', 'Ductless Mini-Split'
    geothermal = 'geothermal', 'Geothermal'
    portable_air_conditioner = 'portable_air_conditioner', 'Portable Air Conditioner'
    no_cooling = 'no_cooling', 'No Cooling'

class Heating(models.TextChoices):
    forced_air = 'forced_air', 'Forced Air'
    radiant_heat = 'radiant_heat', 'Radiant Heat'
    baseboard = 'baseboard', 'Baseboard'
    central = 'central', 'Central Heating'
    electric = 'electric', 'Electric'
    gas = 'gas', 'Gas'
    heat_pump = 'heat_pump', 'Heat Pump'
    solar = 'solar', 'Solar'
    wood_stove = 'wood_stove', 'Wood Stove'

class Floors(models.TextChoices):
    hardwood = 'hardwood', 'Hardwood'
    laminate = 'laminate', 'Laminate'
    tile = 'tile', 'Tile'
    carpet = 'carpet', 'Carpet'
    vinyl = 'vinyl', 'Vinyl'
    concrete = 'concrete', 'Concrete'
    bamboo = 'bamboo', 'Bamboo'
    cork = 'cork', 'Cork'
    stone = 'stone', 'Stone'

class Parking(models.TextChoices):
    attached_garage = 'attached_garage', 'Attached Garage'
    detached_garage = 'detached_garage', 'Detached Garage'
    carport = 'carport', 'Carport'
    street_parking = 'street_parking', 'Street Parking'
    driveway = 'driveway', 'Driveway'
    assigned_parking = 'assigned_parking', 'Assigned Parking'
    covered_parking = 'covered_parking', 'Covered Parking'
    no_parking = 'no_parking', 'No Parking'

class Home_type(models.TextChoices):
    house = 'residential', 'single family'
    condo = 'condominium', 'condominium'
    multi = 'multifamily', 'multifamily'

class User_preferences(models.Model):
    user_id = models.ForeignKey(Users, related_name='user_preferences', on_delete=models.CASCADE)
    home_type = models.CharField(blank=True, null=False, default="")
    bedrooms = models.CharField(blank=True, null=False, max_length=1, choices=Bedrooms.choices, default=0)
    bathrooms = models.CharField(blank=True, null=False, max_length=1, choices=Bathrooms.choices, default=1)
    interests = models.CharField(blank=True, null=False, choices=Interests.choices, default="")
    laundry = models.CharField(blank=True, null=False, choices=Laundry.choices, default="")
    cooling = models.CharField(blank=True, null=False, choices=Cooling.choices, default="")
    heating = models.CharField(blank=True, null=False, choices=Heating.choices, default="")
    living_area = models.PositiveIntegerField(blank=True, null=False, default=0)
    lot_area = models.PositiveIntegerField(blank=True, null=False, default=0)
    age = models.PositiveIntegerField(blank=True, null=False, default=0)
    price_min = models.PositiveIntegerField(blank=True, null=False, default=0)
    price_max = models.PositiveIntegerField(blank=True, null=False, default=20000000)
    hoa_max = models.PositiveIntegerField(blank=True, null=False, default=30000)
    hoa_min = models.PositiveIntegerField(blank=True, null=False, default=0)
    dishwasher = models.BooleanField(blank=True, null=False, default=True)
    floors = models.CharField(blank=True, null=False, choices=Floors.choices, default="")
    parking = models.CharField(blank=True, null=False, choices=Parking.choices, default="")