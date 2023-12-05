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
    albany_park = 'albany_park', 'Albany Park'
    altgeld_gardens = 'altgeld_gardens', 'Altgeld Gardens'
    andersonville = 'andersonville', 'Andersonville'
    acardia_terrace = 'acardia_terrace', 'Arcadia Terrace'
    archer_heights = 'archer_heights', 'Archer Heights'
    armour_square = 'armour_square', 'Armour Square'
    ashburn = 'ashburn', 'Ashburn'
    ashburn_estates = 'ashburn_estates', 'Ashburn Estates'
    auburn_gresham = 'auburn_gresham', 'Auburn Gresham'
    avalon_park = 'avalon_park', 'Avalon Park'
    avondale = 'avondale', 'Avondale'
    avondale_gardens = 'avondale_gardens', 'Avondale Gardens'
    back_of_the_yards = 'back_of_the_yards', 'Back of the Yards'
    belmont_central = 'belmont_central', 'Belmont Central'
    belmont_gardens = 'belmont_gardens', 'Belmont Gardens'
    belmont_heights = 'belmont_heights', 'Belmont Heights'
    belmont_terrace = 'belmont_terrace', 'Belmont Terrace'
    beverly = 'beverly', 'Beverly'
    beverly_view = 'beverly_view', 'Beverly View'
    beverly_woods = 'beverly_woods', 'Beverly Woods'
    big_oaks = 'big_oaks', 'Big Oaks'
    boystown = 'boystown', 'Boystown'
    bowmanville = 'bowmanville', 'Bowmanville'
    brainerd = 'brainerd', 'Brainerd'
    bridgeport = 'bridgeport', 'Bridgeport'
    brighton_park = 'brighton_park', 'Brighton Park'
    bronzeville = 'bronzeville', 'Bronzeville'
    bucktown = 'bucktown', 'Bucktown'
    budlong_woods = 'budlong_woods', 'Budlong Woods'
    buena_park = 'buena_park', 'Buena Park'
    burnside = 'burnside', 'Burnside'
    calumet_heights = 'calumet_heights', 'Calumet Heights'
    canaryville = 'canaryville', 'Canaryville'
    chatham = 'chatham', 'Chatham'
    chicago_lawn = 'chicago_lawn', 'Chicago Lawn'
    chinatown = 'chinatown', 'Chinatown'
    clearings = 'clearings', 'Clearing'
    cottage_grove_heights = 'cottage_grove_heights', 'Cottage Grove Heights'
    daley_plaza = 'daley_plaza', 'Daley Plaza'
    dearborn_park = 'dearborn_park', 'Dearborn Park'
    deering = 'deering', 'Deering'
    douglas = 'douglas', 'Douglas'
    dunning = 'dunning', 'Dunning'
    east_garfield_park = 'east_garfield_park', 'East Garfield Park'
    east_side = 'east_side', 'East Side'
    east_village = 'east_village', 'East Village'
    edgebrook = 'edgebrook', 'Edgebrook'
    edgewater = 'edgewater', 'Edgewater'
    edison_park = 'edison_park', 'Edison Park'
    englewood = 'englewood', 'Englewood'
    fernwood = 'fernwood', 'Fernwood'
    fuller_park = 'fuller_park', 'Fuller Park'
    fulton_river_district = 'fulton_river_district', 'Fulton River District'
    gage_park = 'gage_park', 'Gage Park'
    galewood = 'galewood', 'Galewood'
    garfield_ridge = 'garfield_ridge', 'Garfield Ridge'
    gold_coast = 'gold_coast', 'Gold Coast'
    goose_island = 'goose_island', 'Goose Island'
    grand_boulevard = 'grand_boulevard', 'Grand Boulevard'
    grand_crossing = 'grand_crossing', 'Grand Crossing'
    greater_grand_crossing = 'greater_grand_crossing', 'Greater Grand Crossing'
    groveland_park = 'groveland_park', 'Groveland Park'
    hamilton_park = 'hamilton_park', 'Hamilton Park'
    hanson_park = 'hanson_park', 'Hanson Park'
    harbert_woods = 'harbert_woods', 'Harbert Woods'
    harding_park = 'harding_park', 'Harding Park'
    heart_of_italy = 'heart_of_italy', 'Heart of Italy'
    hegewisch = 'hegewisch', 'Hegewisch'
    hermosa = 'hermosa', 'Hermosa'
    hollywood_park = 'hollywood_park', 'Hollywood Park'
    horseshoe_hill = 'horseshoe_hill', 'Horseshoe Hill'
    hull_house = 'hull_house', 'Hull House'
    humboldt_park = 'humboldt_park', 'Humboldt Park'
    hyde_park = 'hyde_park', 'Hyde Park'
    irving_park = 'irving_park', 'Irving Park'
    jackson_park = 'jackson_park', 'Jackson Park'
    jefferson_park = 'jefferson_park', 'Jefferson Park'
    kenwood = 'kenwood', 'Kenwood'
    kilbourn_park = 'kilbourn_park', 'Kilbourn Park'
    lake_meadows = 'lake_meadows', 'Lake Meadows'
    lake_view = 'lake_view', 'Lake View'
    lake_view_east = 'lake_view_east', 'Lake View East'
    lawndale = 'lawndale', 'Lawndale'
    leclaire_courts = 'leclaire_courts', 'Leclaire Courts'
    lincoln_park = 'lincoln_park', 'Lincoln Park'
    lincoln_square = 'lincoln_square', 'Lincoln Square'
    little_italy = 'little_italy', 'Little Italy'
    little_village = 'little_village', 'Little Village'
    logan_square = 'logan_square', 'Logan Square'
    longwood_manor = 'longwood_manor', 'Longwood Manor'
    loop = 'loop', 'Loop'
    lower_west_side = 'lower_west_side', 'Lower West Side'
    loyola_university = 'loyola_university', 'Loyola University'
    margate_park = 'margate_park', 'Margate Park'
    marquette_park = 'marquette_park', 'Marquette Park'
    marycrest = 'marycrest', 'Marycrest'
    marynook = 'marynook', 'Marynook'
    mayfair = 'mayfair', 'Mayfair'
    mckinley_park = 'mckinley_park', 'McKinley Park'
    montclare = 'montclare', 'Montclare'
    morgan_park = 'morgan_park', 'Morgan Park'
    mount_greenwood = 'mount_greenwood', 'Mount Greenwood'
    mount_greenwood_heights = 'mount_greenwood_heights', 'Mount Greenwood Heights'
    near_north_side = 'near_north_side', 'Near North Side'
    near_south_side = 'near_south_side', 'Near South Side'
    near_west_side = 'near_west_side', 'Near West Side'
    new_city = 'new_city', 'New City'
    noble_square = 'noble_square', 'Noble Square'
    north_austin = 'north_austin', 'North Austin'
    north_branch = 'north_branch', 'North Branch'
    north_center = 'north_center', 'North Center'
    north_halsted = 'north_halsted', 'North Halsted'
    north_lawndale = 'north_lawndale', 'North Lawndale'
    north_mayfair = 'north_mayfair', 'North Mayfair'
    north_park = 'north_park', 'North Park'
    norwood_park = 'norwood_park', 'Norwood Park'
    oakland = 'oakland', 'Oakland'
    old_edgebrook = 'old_edgebrook', 'Old Edgebrook'
    old_irving_park = 'old_irving_park', 'Old Irving Park'
    old_town = 'old_town', 'Old Town'
    old_town_triangle = 'old_town_triangle', 'Old Town Triangle'
    oriental_theatre_district = 'oriental_theatre_district', 'Oriental Theatre District'
    park_manor = 'park_manor', 'Park Manor'
    park_west = 'park_west', 'Park West'
    parkview = 'parkview', 'Parkview'
    peterson_park = 'peterson_park', 'Peterson Park'
    pill_hill = 'pill_hill', 'Pill Hill'
    pilsen = 'pilsen', 'Pilsen'
    portage_park = 'portage_park', 'Portage Park'
    prairie_district = 'prairie_district', 'Prairie District'
    prairie_shores = 'prairie_shores', 'Prairie Shores'
    princeton_park = 'princeton_park', 'Princeton Park'
    printers_row = 'printers_row', "Printer's Row"
    pulaski_park = 'pulaski_park', 'Pulaski Park'
    pullman = 'pullman', 'Pullman'
    ranch_triangle = 'ranch_triangle', 'Ranch Triangle'
    ravinia = 'ravinia', 'Ravinia'
    ravenswood = 'ravenswood', 'Ravenswood'
    ravenswood_gardens = 'ravenswood_gardens', 'Ravenswood Gardens'
    ravenswood_manor = 'ravenswood_manor', 'Ravenswood Manor'
    river_north = 'river_north', 'River North'
    river_west = 'river_west', 'River West'
    rogers_park = 'rogers_park', 'Rogers Park'
    roscoe_village = 'roscoe_village', 'Roscoe Village'
    roseland = 'roseland', 'Roseland'
    rosemoor = 'rosemoor', 'Rosemoor'
    saint_bens = 'saint_bens', "Saint Ben's"
    sauganash = 'sauganash', 'Sauganash'
    schorsch_forest_view = 'schorsch_forest_view', 'Schorsch Forest View'
    schorsch_village = 'schorsch_village', 'Schorsch Village'
    scottsdale = 'scottsdale', 'Scottsdale'
    sheffield = 'sheffield', 'Sheffield'
    sheridan_park = 'sheridan_park', 'Sheridan Park'
    smith_park = 'smith_park', 'Smith Park'
    south_austin = 'south_austin', 'South Austin'
    south_chicago = 'south_chicago', 'South Chicago'
    south_commons = 'south_commons', 'South Commons'
    south_deering = 'south_deering', 'South Deering'
    south_east_side = 'south_east_side', 'South East Side'
    south_lawndale = 'south_lawndale', 'South Lawndale'
    south_loop = 'south_loop', 'South Loop'
    south_shore = 'south_shore', 'South Shore'
    stony_island_park = 'stony_island_park', 'Stony Island Park'
    streeterville = 'streeterville', 'Streeterville'
    summit = 'summit', 'Summit'
    the_patch = 'the_patch', 'The Patch'
    tri_taylor = 'tri-taylor', 'Tri-Taylor'
    ukrainian_village = 'ukrainian_village', 'Ukrainian Village'
    union_ridge = 'union_ridge', 'Union Ridge'
    university_of_chicago = 'university_of_chicago', 'University of Chicago'
    university_village = 'university_village', 'University Village'
    uptown = 'uptown', 'Uptown'
    vittum_park = 'vittum_park', 'Vittum Park'
    washington_heights = 'washington_heights', 'Washington Heights'
    washington_park = 'washington_park', 'Washington Park'
    west_beverly = 'west_beverly', 'West Beverly'
    west_chatham = 'west_chatham', 'West Chatham'
    west_de_paul = 'west_de_paul', 'West De Paul'
    west_elsdon = 'west_elsdon', 'West Elsdon'
    west_englewood = 'west_englewood', 'West Englewood'
    west_garfield_park = 'west_garfield_park', 'West Garfield Park'
    west_humboldt_park = 'west_humboldt_park', 'West Humboldt Park'
    west_lawn = 'west_lawn', 'West Lawn'
    west_loop = 'west_loop', 'West Loop'
    west_park = 'west_park', 'West Park'
    west_pullman = 'west_pullman', 'West Pullman'

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
    radiant = 'radiant', 'Radiant'
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
    house = 'residential', 'residential'
    condo = 'condominium', 'condominium'
    multi = 'multifamily', 'multifamily'

class User_preferences(models.Model):
    user_id = models.ForeignKey(Users, related_name='user_preferences', on_delete=models.CASCADE)
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