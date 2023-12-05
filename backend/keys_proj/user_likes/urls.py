from django.urls import path
# Explicit imports
from .views import All_likes

urlpatterns = [
    path('', All_likes.as_view(), name='all_likes'),
]