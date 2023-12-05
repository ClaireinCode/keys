from django.urls import path
# Explicit imports
from .views import All_preferences

urlpatterns = [
    path('', All_preferences.as_view(), name='all_preferences'),
]