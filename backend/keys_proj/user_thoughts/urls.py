from django.urls import path
# Explicit imports
from .views import All_thoughts

urlpatterns = [
    path('', All_thoughts.as_view(), name='all_thoughts'),
]