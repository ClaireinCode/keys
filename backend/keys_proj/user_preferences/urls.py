from django.urls import path
# Explicit imports
from .views import All_preferences, A_preference

urlpatterns = [
    path('', All_preferences.as_view(), name='all_preferences'),
    path("<int:preference_id>/", A_preference.as_view(), name="a_preference")
]